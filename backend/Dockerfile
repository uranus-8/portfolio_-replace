# PHP 8.2 の公式イメージを使用
FROM php:8.2-fpm

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    git \
    libzip-dev \
    && docker-php-ext-install pdo_mysql zip

# Composerのインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 作業ディレクトリを作成
WORKDIR /var/www/html

# アプリケーションコードをコピー
COPY . .

# Composer で依存関係をインストール
RUN composer install

# ポートを公開
EXPOSE 80

# 起動コマンド
CMD ["php-fpm"]
