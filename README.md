# Netflix Clone
このプロジェクトはNetflixのUI、[TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)を用いた、現在日本で公開中、一番人気、今まで一番評価が高い映画をそれぞれのスライダーで表示する映画紹介Webアプリケーションです。

# デモ
![NetflixClone-Chrome2025-07-1010-47-24-ezgif com-crop](https://github.com/user-attachments/assets/f2ee8bd5-3783-46e9-838c-819911d34081)

[配信リンクはこちらへ](https://react-movie-rosy.vercel.app/)

# 🛠️ 技術スタック

### 🗣️ 言語（Language）
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### ⚛️ フレームワーク / ライブラリ（Framework / Library）
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

### ⚡ ビルドツール（Build Tool）
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### 🎨 スタイリング（Styling）
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### 🎞️ アニメーション（Animation）
![Motion](https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### ☁️ デプロイ (Deployment)
![Vercel](https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)
---

# 🤝 開発用ルール

### 🛠️ プロジェクト設定
1. リポジトリをクローン
   
git clone https://github.com/ByeongGwan-Seo/react-movie.git

2. ディレクトリに移動

cd react-movie

3. 依存関係をインストール

npm install

4. 開発サーバーを起動

npm run dev

---

### ✅ 命名規則（Naming Convention）

| 対象 | 規則 |
|------|------|
| 変数名 | `camelCase`（例: `isLoading`, `movieList`） |
| 関数名 | `動詞 + 名詞`の`camelCase`（例: `getMovies`, `toggleModal`） |
| コンポーネント名 | `PascalCase`（例: `MovieSlider`, `Banner`） |
| ファイル/フォルダ名 | 機能基準で作成（例: `movie`, `slider`, `utils`） |

---

### 🧱 コンポーネント / ディレクトリ構成規則

- `/pages` → ページ単位のコンポーネント
- `/components` → 再利用可能なUI
- `/styled-components` → スタイリング定義
- `/api` → API関数
- `/utils` → 補助関数、変換ツール
- 新しいコンポーネントを作成する際は上記構造に従うこと

---

### 🔐 環境変数（.env）

- `.env`ファイルにAPIキーを記述し、Gitに含めないこと
- `VITE_API_KEY`など、接頭語は `VITE_` を必須とする
- 使用例: `import.meta.env.VITE_API_KEY`
- ビルドするためにはVercelの `settings -> environment variables`で.envファイルをimportする必要あります。（大事）

---

### 📝 ブランチ名・コミットメッセージ規則（Optional）

```bash
feat: 新機能
fix: バグ修正
refactor: リファクタリング
style: スタイル・レイアウト調整
docs: コメント・README更新
```

---

### 🔍 コードレビュー / PRルール
- mainへの直接Push禁止
- 機能＋読みやすさを重視してレビュー
- JSDocコメントや型定義も確認対象

---

### 📄 コメントとドキュメントの書き方
- すべての関数に /** JSDocコメント */ を付けること
- styled-componentsにも説明コメントを入れる
- VSCode上でツールチップとして表示されるようにする

---

### その他
- APIの詳細情報（レスポンスなど）の確認は[API ドキュメント](https://developer.themoviedb.org/reference/intro/getting-started)を確認
