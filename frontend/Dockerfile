# ベースイメージ
FROM node:20

# アプリケーションディレクトリを作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションのポートを公開
EXPOSE 3000

# Next.js の開発サーバーを起動
CMD ["npm", "run", "dev"]

