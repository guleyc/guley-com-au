---
title: 'Plesk Panelde Yandex Mail SMTP Hatası Nasıl Çözülür?'
date: '2020-06-01'
author: 'Cagatay Guley'
layout: post
permalink: /how-to-resolve-smtp-error-in-plesk-panel-with-yandex-mail/
redirect_from:
  - /how-to-resolve-smtp-error-in-plesk-panel-with-yandex-mail
categories: [web]
lang: tr
tags: [smtp, error, plesk, yandex mail]
---


Web hosting yönetimi için Plesk Panel ve e-posta servisleriniz için Yandex Mail kullanıyorsanız, e-posta göndermeye çalışırken SMTP (Simple Mail Transfer Protocol) hatalarıyla karşılaşabilirsiniz. Bu sorun genellikle “msmtprc” dosyasında yapılacak ayarlamalarla çözülebilir. Bu rehberde, bu problemi çözmek için gereken adımları size anlatacağız.

### **Adım 1: “msmtprc” Dosyasına Erişme**

1. SSH veya tercih ettiğiniz terminal uygulamasını kullanarak Plesk Panel'in kurulu olduğu sunucunuza giriş yapın.
2. `/etc/msmtprc`dosyasının bulunduğu dizine gidin. Genellikle bu dosya /etc/msmtprc konumunda bulunur.

### **Adım 2: “msmtprc” Dosyasını Düzenleme**

1. “msmtprc” dosyasını bir metin düzenleyici kullanarak açın. Tercihinize bağlı olarak `nano`, `edit` veya `vi` komutunu kullanabilirsiniz:

```
nano /etc/msmtprc

```

```
vi /etc/msmtprc

```

```
edit /etc/msmtprc

```

2. “msmtprc” dosyası içinde çeşitli SMTP yapılandırma ayarları göreceksiniz. Bu ayarlar SMTP sunucu adresini, port numarasını, kimlik doğrulama bilgilerini ve daha fazlasını içerebilir. Ayarların, Yandex Mail SMTP sunucunuzun gereksinimleriyle eşleştiğinden emin olun.

```
#DİKKAT!
#
#BU DOSYA OTOMATİK OLARAK OLUŞTURULDUĞU İÇİN DEĞİŞTİRMEYİN,
#YAPACAĞINIZ TÜM DEĞİŞİKLİKLER DOSYA BİR SONRAKİ SEFER OLUŞTURULDUĞUNDA KAYBOLACAKTIR.

# MSMTP yapılandırma dosyası. Sözdizimi için msmtp(1)'e bakın.
# Bu dosya msmtpmng aracı tarafından oluşturulmuştur.

#
# Genel ayarlar bölümü
#
defaults

syslog LOG_MAIL
tls_starttls off
tls_certcheck off
tls on

# Otomatik zarf-gönderen (envelope-from) oluşturma. 
# Dikkat: bu ayar, --from veya diğer yollarla açıkça belirtilen zarf-gönderen adresini geçersiz kılar.
auto_from off
from mail@domain.com

# Bir zarf-gönderen adresi oluşturmak için bir alan adı bölümü ayarlayın.
maildomain domain.com

# Bu komut, SMTP EHLO (veya LMTP LHLO) komutunun argümanını ayarlar.
domain server.domain.com

#
# Default account.
#
account default

host smtp.yandex.com.tr
port 465

auth on
user mail@domain.com
# Şifre aslında /etc/psa/private/msmtp-pwdeval.conf dosyasında saklanmaktadır
passwordeval /usr/lib64/plesk-9.0/msmtp-pwdeval
```

Bu rehberde anlatılan adımları izleyerek, Plesk Panel ile Yandex Mail kullanırken karşılaştığınız SMTP hatalarını çözebilmelisiniz. “msmtprc” dosyasındaki SMTP yapılandırma ayarlarınızı iki kez kontrol ettiğinizden ve e-postalarınızın başarıyla gönderildiğinden emin olmak için yapılandırmayı test ettiğinizden emin olun.

E-posta servislerinizin güvenliğini sağlamak için “msmtprc” dosyasını güvenli bir şekilde kaydetmeyi ve SMTP kimlik doğrulama bilgilerinizi gizli tutmayı unutmayın.