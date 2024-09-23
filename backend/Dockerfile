# ベースイメージとしてPHPの公式イメージを使用
FROM php:8.2-fpm

# 必要なPHP拡張をインストール
RUN docker-php-ext-install pdo pdo_mysql

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 作業ディレクトリを作成
WORKDIR /var/www/html

# アプリケーションのファイルをコピー
COPY . .

# 依存関係をインストール
RUN composer install

# ポートを公開
EXPOSE 80

# 起動コマンドを定義
CMD ["php-fpm"]
