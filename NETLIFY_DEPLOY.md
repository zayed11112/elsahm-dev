# دليل نشر موقع السهم على Netlify

## 📋 متطلبات النشر

### 1. إعدادات المستودع
- تأكد من أن المستودع عام أو أن Netlify لديه صلاحية الوصول
- الفرع الرئيسي: `main`

### 2. إعدادات البناء في Netlify
```
Build command: npm run build
Publish directory: dist
Node version: 18
```

## 🚀 خطوات النشر على Netlify

### الطريقة الأولى: من خلال Git Integration
1. اذهب إلى [Netlify](https://netlify.com)
2. اضغط على "New site from Git"
3. اختر GitHub واختر المستودع `elsahm_ar`
4. اضبط الإعدادات:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. اضغط "Deploy site"

### الطريقة الثانية: رفع مباشر
1. قم ببناء المشروع محلياً:
   ```bash
   npm run build
   ```
2. اسحب مجلد `dist` إلى Netlify

## ⚙️ متغيرات البيئة (إذا لزم الأمر)
في إعدادات الموقع على Netlify، أضف:
```
NODE_ENV=production
```

## 🔧 إعدادات مخصصة

### Domain Settings
- يمكنك تخصيص النطاق من Site settings > Domain management
- مثال: `elsahm-ar.netlify.app`

### Performance Optimization
- تم تفعيل Asset Optimization تلقائياً
- تم إعداد Cache headers للأداء الأمثل

## 📁 الملفات المهمة للنشر
- `netlify.toml` - إعدادات Netlify الرئيسية
- `public/_redirects` - قواعد إعادة التوجيه
- `public/_headers` - إعدادات الأمان والأداء
- `vite.config.ts` - إعدادات البناء المحسنة

## 🔍 استكشاف الأخطاء

### مشاكل شائعة:
1. **404 عند التنقل**: تأكد من وجود ملف `_redirects`
2. **فشل البناء**: تحقق من إصدار Node.js (يجب أن يكون 18+)
3. **مشاكل الخطوط**: تأكد من تحميل الخطوط من CDN

### سجلات البناء:
- راجع Build logs في Netlify لمعرفة سبب أي أخطاء

## 📊 مراقبة الأداء
- استخدم Netlify Analytics لمراقبة الأداء
- تحقق من Core Web Vitals في Google PageSpeed Insights

## 🔄 التحديثات التلقائية
- سيتم تحديث الموقع تلقائياً عند push إلى فرع `main`
- يمكن إيقاف Auto-deploy من Site settings إذا لزم الأمر

## 🌐 الروابط المفيدة
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
- [React Router with Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
