/**
 * 映画のポスターや背景画像などのパスから、完全な画像URLを生成するユーティリティ関数。
 *
 * @function makeImagePath
 * @param {string} id - 画像ファイル名やパス（例: `"wwemzKWzjKYJFfCeiB57q3r4Bcm"`）
 * @param {string} [format] - オプション。画像のサイズ指定（例: `"w200"`, `"w500"`）。指定しない場合は `"original"` が使用されます。
 * @returns {string} URLを返します。
 *
 * @example
 * makeImagePath(movie.backdrop_path || movie.poster_path, "w500")
 *
 * @remarks
 * TMDB（The Movie Database）APIから取得される画像パスを元に、表示可能なURLを構築します。
 * 画像の形式（`.jpg`, `.png`, `.svg`）は、実際のAPIレスポンスに依存します。
 */

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}.jpg`;
}
