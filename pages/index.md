# Community Portal

Community Portal, öncelikle üniversitelerdeki öğrenci kulüpleri ve toplulukları için oluşturulmuş kümülatif bir iletişim portalıdır. Bu web sitesinin amacı, toplulukların insan toplayabilmesi, kendi web sitelerini oluşturabilmesi ve aktif üyelerine etkinlik ile sosyal medya benzeri fotoğraf paylaşım hizmeti sağlamaktır. Bu sayede çoğu topluluk için eksik olan iletişim altyapısı tamamlanmış olacaktır. Kullanıcı dostu ve kişiselleştirilebilir özellikleriyle oldukça öğrenci dostu bir web sitesidir.

## Web Sitesinin Ana Bölümleri
1. **Ana Sayfa**
2. **Kulüp Kişisel Web Sitesi**
3. **Feed**
4. **Etkinlikler**
5. **Kulüpler**
6. **Galeri**

---

## Yapılacaklar

## Feed
- Feed içeriği, kulüplerin galerilerinde ve etkinlik sayfalarında paylaştıkları içeriklerden oluşacak.
- Kullanıcılara önce **üyesi oldukları kulübün** paylaşımları gösterilecek.
- Takip edilen kulüplerin paylaşımları bittikten sonra diğer kulüp paylaşımları gösterilecek. (Paylaşım tarih sırasına göre gözükecek)
- Beğenme ve yorum özellikleri olacak (galeriden farklı bir yapı).
- Kulüp yöneticilerinin isteğine bağlı olarak paylaşımlar feedde gözüküp gözükmeyecek.

---

## Galeri
- Kulüplerin fotoğraf paylaşımı yapabilecekleri, **Instagram hesap sayfasına benzer** bir sayfa yapısı olacak.
- Kullanıcılar, fotoğrafları **kulüplere göre filtreleyebilecek**.
- Fotoğrafların altında, **atıldığı tarih** ve **fotoğrafın nereden olduğu** bilgisi kısa bir alt metin olarak gösterilecek.

---

## Etkinlik
- Kulüpler, **tarih ve açıklamalarla etkinlik oluşturabilecek**.
- Etkinlikler, **tarih ve kulübe göre filtrelenebilecek**.
- Kulüp başkanlarının isteğine bağlı olarak **birden fazla kulüp ortak etkinlik** düzenleyebilecek.
- Kullanıcılara, **üyesi oldukları kulübün yaklaşan etkinlikleri** mail olarak bildirilecek.
- Üyeler, **istedikleri etkinliğe kayıt yaptırabilecekler** (kulüp üyelerine özel etkinlikler ayrı).
- Her etkinlik için **subdomain/etkinlik_ismi** şeklinde sayfa oluşturulacak.
- Luma ile görüşülecek.

---

## Kulüp Sayfası
- Kulüpler için **kulüp_ismi.domain** şeklinde özel **subdomainli web siteleri** oluşturulacak.
- Oluşturulan sayfada, **default bir sayfa template** kullanılacak; isteyen kulüpler **kendi tasarımlarını** kullanabilecek.
- Default sayfa içeriği:
  - Kulüp ismi
  - İletişim bilgileri
  - Sosyal medya hesapları
  - Girdikleri etkinlikler
  - Paylaştıkları fotoğrafların galeri önizlemesi

---

## Kulüp Admin Sayfası
- Kulüp başkanları:
  - Üyelerine izin veya rol ataması yapabilecek.
  - Üye listesi görüntüleme, üye ekleme/atma gibi işlemler gerçekleştirebilecek.
  - Üyelerine mail gönderebilecek ve mailleri **zamana bağlı olarak** planlayabilecek.
  - Kulüp bilgilerini düzenleyebilecek ve gerekirse silebilecek.
  - Feed post oluşturabilecek, galeriye fotoğraf yükleyebilecek ve etkinlik oluşturabilecek.
- **Dashboard** özellikleri:
  - Feed'de beğeni ve yorum sayısını gösterecek.
  - Etkinliklere katılım sayılarını gösterecek.
  - Zamana göre üye değişim analizini içerecek.

## Kullanılan Teknolojiler

### Backend
- Java
- Spring Boot
- RabbitMQ
- Redis
- Terraform

### Database
- PostgreSQL
- MongoDB

### Frontend
- Next.js

### CI/CD
- GitHub Actions
- AWS CodeBuild
- Maybe Lambda

### Cloud
- AWS ya da Cloudflare

### Containerization
- Kubernetes (şimdilik Docker Compose)

---

## Gerekli Pozisyonlar

### Yönetim
- **Müdür:** Arda
- **Lead Engineer:** Eren

### Geliştirme
- **Frontend:** 1 veya daha fazla geliştirici (sayı ileride netleşecek)
- **Backend:** 1 geliştirici
- **Tasarım:** 1 kişi
- **Cloud:** 1 kişi

> **Not:** İhtiyaç durumunda daha fazla pozisyon açılabilir.

---

**Hedef:** İş yükünü olabildiğince makul düzeyde tutmak.

