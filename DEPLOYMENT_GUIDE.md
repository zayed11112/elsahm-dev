# دليل النشر على GitHub Pages 🚀

## خطوات النشر

### 1. إعداد Repository على GitHub

```bash
# إنشاء repository جديد على GitHub
# اسم الـ repository: elsahm-dev
# URL: https://github.com/eslamz111/elsahm-dev.git
```

### 2. رفع الكود إلى GitHub

```bash
# تهيئة Git في المجلد المحلي
git init

# إضافة جميع الملفات
git add .

# أول commit
git commit -m "Initial commit: تطبيق السهم للتسكين الطلابي مع تحسينات SEO"

# ربط المجلد المحلي بـ GitHub repository
git remote add origin https://github.com/eslamz111/elsahm-dev.git

# رفع الكود إلى GitHub
git branch -M main
git push -u origin main
```

### 3. تفعيل GitHub Pages

1. اذهب إلى repository على GitHub
2. اضغط على **Settings**
3. اذهب إلى قسم **Pages** في القائمة الجانبية
4. في **Source** اختر **GitHub Actions**
5. سيتم تشغيل الـ workflow تلقائياً

### 4. التحقق من النشر

- بعد انتهاء الـ workflow، سيكون الموقع متاح على:
- https://eslamz111.github.io/elsahm-dev/

### 5. أوامر مفيدة للتطوير

```bash
# تشغيل الموقع محلياً
npm run dev

# بناء المشروع للإنتاج
npm run build:github

# معاينة البناء محلياً
npm run preview

# فحص الكود
npm run lint

# نشر يدوي (إذا كان gh-pages مثبت)
npm run deploy
```

### 6. تحديث الموقع

```bash
# بعد إجراء تعديلات
git add .
git commit -m "وصف التحديث"
git push origin main

# سيتم إعادة النشر تلقائياً
```

## ⚙️ إعدادات مهمة

### GitHub Actions Permissions

تأكد من أن الـ repository له الصلاحيات التالية:
- **Settings** > **Actions** > **General**
- **Workflow permissions**: Read and write permissions
- **Allow GitHub Actions to create and approve pull requests**: ✅

### GitHub Pages Settings

- **Source**: GitHub Actions
- **Custom domain**: (اختياري)
- **Enforce HTTPS**: ✅

## 🔧 استكشاف الأخطاء

### إذا فشل الـ workflow:

1. تحقق من **Actions** tab في GitHub
2. اضغط على الـ workflow الفاشل
3. راجع الـ logs لمعرفة السبب

### أخطاء شائعة:

- **Build failed**: تحقق من أن جميع dependencies مثبتة
- **Permission denied**: تحقق من صلاحيات GitHub Actions
- **404 on deployed site**: تحقق من base URL في vite.config.ts

## 📊 مراقبة الأداء

بعد النشر، يمكنك مراقبة:

- **Google Search Console**: إضافة الموقع للمراقبة
- **Google Analytics**: إضافة tracking code
- **PageSpeed Insights**: فحص سرعة الموقع

## 🔄 التحديثات المستقبلية

لإضافة ميزات جديدة:

1. أنشئ branch جديد
2. اعمل التعديلات
3. اعمل pull request
4. بعد الموافقة، merge إلى main
5. سيتم النشر تلقائياً

---

**ملاحظة**: تأكد من أن جميع الروابط في الموقع تشير إلى:
`https://eslamz111.github.io/elsahm-dev/`
