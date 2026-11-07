# TOPRAK404 — Vercel'e hazır site

## Yerel önizleme
`index.html` dosyasını tarayıcıda açabilirsin.

## Şarkı ekleme
1. `assets` adında klasör oluştur.
2. Diss şarkını `toprak-diss.mp3` adıyla bu klasöre koy.
3. Site içindeki müzik oynatıcı otomatik olarak dosyayı kullanır.

## Afiş ekleme
Afiş dosyanı `assets/poster.png` olarak ekleyebilirsin. İstersen `index.html` içindeki `poster-placeholder` bölümünü bir `<img>` etiketiyle değiştirebilirsin.

## Vercel'de yayınlama
1. Bu klasörü GitHub'a yeni bir repository olarak yükle.
2. Vercel hesabında **Add New → Project** seç.
3. GitHub repository'ni import et.
4. Framework Preset: **Other**; Build Command ve Output Directory alanlarını boş bırak.
5. **Deploy** seç.

Vercel sana `proje-adi.vercel.app` biçiminde HTTPS adresi verir. Proje adı müsait değilse başka bir ad seçmen gerekir.
