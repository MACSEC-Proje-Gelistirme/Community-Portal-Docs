# Community Portal API

Bu proje, topluluk portalı için backend API'sini içerir. Golang ile geliştirilmiş bir REST API projesidir.

## Gereksinimler

- Go 1.23 veya üzeri
- PostgreSQL
- Docker (opsiyonel)

## Kurulum

### 1. Projeyi Klonlama

```bash
git clone [repository-url]
cd Community-Portal-Api
```

### 2. Ortam Değişkenlerini Ayarlama

`.env.example` dosyasını `.env` olarak kopyalayın ve gerekli değişkenleri doldurun:

```bash
cp .env.example .env
```

Aşağıdaki değişkenleri kendi ortamınıza göre düzenleyin:
```bash
cp .env.example .env
```

DB_HOST=localhost     # PostgreSQL host adresi
DB_PORT=5432         # PostgreSQL port numarası
DB_USER=your_user    # PostgreSQL kullanıcı adı
DB_PASSWORD=your_pass # PostgreSQL şifresi
DB_NAME=community    # Veritabanı adı
DB_SLL_MODE=disable  # SSL modu
```

### 3. Veritabanı Kurulumu

#### Manuel Kurulum

1. PostgreSQL'i başlatın
2. Veritabanını oluşturun:
```bash
psql -U postgres
CREATE DATABASE community;
```
3. Şema ve tabloları oluşturun:
```bash
psql -U postgres -d community -f scripts/dbsetup.sql
```

#### Script ile Kurulum

Veya sağlanan script ile otomatik kurulum yapabilirsiniz:
```bash
chmod +x scripts/setup-db.sh
./scripts/setup-db.sh
```

### 4. Uygulamayı Çalıştırma

#### Doğrudan Çalıştırma

```bash
go mod download  # Bağımlılıkları yükle
go run cmd/server/main.go
```

#### Docker ile Çalıştırma

```bash
docker build -t community-portal-api .
docker run -p 8080:8080 --env-file .env community-portal-api
```

## Geliştirme

### Kod Yapısı

```
.
├── cmd/
│   └── server/          # Ana uygulama giriş noktası
├── internal/
│   ├── api/            # API handlers
│   ├── middleware/     # Middleware fonksiyonları
│   └── permissions/    # İzin kontrolleri
├── pkg/
│   ├── database/       # Veritabanı bağlantısı
│   └── utils/          # Yardımcı fonksiyonlar
└── scripts/            # Kurulum scriptleri
```