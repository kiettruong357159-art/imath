export function rewriteInternalUrls(html: string): string {
  if (!html) return '';

  // Preserve wp-content media URLs as full remote URLs so images/PDFs work immediately
  // Convert other https://imath.vn/... page links to local relative paths
  let result = html.replace(
    /href=(["'])https?:\/\/imath\.vn(\/[^"']*)\1/gi,
    (fullMatch, quote: string, pathPart: string) => {
      if (pathPart.startsWith('/wp-content/') || pathPart.startsWith('/wp-json/')) {
        return fullMatch;
      }
      let normalizedPath = pathPart;
      if (normalizedPath.length > 1 && normalizedPath.endsWith('/') && !normalizedPath.includes('?')) {
        normalizedPath = normalizedPath.slice(0, -1);
      }
      return `href=${quote}${normalizedPath}${quote}`;
    }
  );

  // Rewrite https://imath.vn root link
  result = result.replace(/href=(["'])https?:\/\/imath\.vn\/?\1/gi, 'href=$1/$1');

  // Rewrite edu.imath.vn links to /edu and /dau-truong
  result = result.replace(
    /href=(["'])https?:\/\/edu\.imath\.vn\/dau-truong\/?\1/gi,
    'href=$1/dau-truong$1'
  );
  result = result.replace(
    /href=(["'])https?:\/\/edu\.imath\.vn\/?(#[^"']*)?\1/gi,
    (fullMatch, quote: string, hash?: string) => {
      void fullMatch;
      return `href=${quote}/edu${hash || ''}${quote}`;
    }
  );

  return result;
}

export function stripHtmlTags(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&#8211;/gi, '–')
    .replace(/&#8217;/gi, '’')
    .replace(/&#8220;/gi, '“')
    .replace(/&#8221;/gi, '”')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractMainHtml(fullHtml: string): string {
  const mainMatch = fullHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch && mainMatch[0]) {
    return rewriteInternalUrls(mainMatch[0]);
  }
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch && bodyMatch[1]) {
    return rewriteInternalUrls(bodyMatch[1]);
  }
  return rewriteInternalUrls(fullHtml);
}
