# Netflix Clone
このプロジェクトはNetflixのUI、[TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)を用いた、現在日本で公開中、一番人気、今まで一番評価が高い映画をそれぞれのスライダーで表示する映画紹介Webアプリケーションです。

# デモ
![NetflixClone-Chrome2025-07-1010-23-02-ezgif com-crop](https://github.com/user-attachments/assets/f94e989f-5a1d-42cb-b3a4-57a7bc268a28)

### 詳細情報表示挙動
![NetflixClone-Chrome2025-07-1114-37-21-ezgif com-resize](https://github.com/user-attachments/assets/651a21a2-6a39-4575-befc-ea65ef59b00b)

### モバイル反応型デザイン
#### 適用前
![KakaoTalk_20250711_162312813_02](https://github.com/user-attachments/assets/48434725-11aa-4146-bee8-4225da9a8f17)
![KakaoTalk_20250711_162312813_01](https://github.com/user-attachments/assets/30470659-679e-46a9-ad01-0d1ffab1591c)
#### 適用後
![KakaoTalk_20250711_162312813](https://github.com/user-attachments/assets/a91fa178-0dc4-41ca-8d07-61bc3cede55b)
![KakaoTalk_20250711_162345277](https://github.com/user-attachments/assets/ceb53b0c-9f1b-414e-baff-168b6b226891)
![KakaoTalk_20250711_163325894](https://github.com/user-attachments/assets/e80211a6-5cf8-41c7-aab6-7c76d3ef1a24)


[配信リンクはこちらへ(日本語対応)](https://react-movie-rosy.vercel.app/)

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

# 機能一覧
### 実装済み   
- [x] [getMovies](https://developer.themoviedb.org/reference/movie-now-playing-list) APIから取得した映画リストをカテゴリ別スライダーに表示

- [x] スライダーのアニメーション及びスライドボタンロジック作成

- [x] ヘッダーのスクロールによるアニメーション

- [x] 映画idから映画の[詳細情報取得](https://developer.themoviedb.org/reference/movie-details)及び画面表示

- [x] 映画詳細情報のモーダル実装

- [x] 映画詳細情報の画面デザイン

### [実装予定(Github Issues)](https://github.com/ByeongGwan-Seo/react-movie/issues)

- [ ] Tv Shows画面実装
- [ ] 検索機能追加

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

### 📁 ディレクトリツリー
```
└── 📁src
    └── 📁apis
        ├── movie_series_api.ts
    └── 📁assets
        ├── react.svg
    └── 📁components
        └── 📁movies
            ├── MovieSlider.tsx
        ├── Header.tsx
    └── 📁Routes
        ├── Home.tsx
        ├── Tv.tsx
    └── 📁styled-components
        ├── StyledHome.tsx
    └── 📁styles
        ├── GlobalStyles.ts
    ├── App.tsx
    ├── main.tsx
    ├── styled.d.ts
    ├── theme.ts
    ├── utils.ts
    └── vite-env.d.ts
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
