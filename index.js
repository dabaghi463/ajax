$.ajax({
    url: 'https://example.com/api/getData.php', // URL که به آن درخواست ارسال می‌شود
    type: 'POST', // نوع درخواست (GET, POST, PUT, DELETE, etc.)
    dataType: 'json', // نوع داده‌ای که از سرور انتظار دارید (json, xml, html, script, text)
    data: { // داده‌هایی که به سرور ارسال می‌شود
        name: 'John Doe',
        age: 30
    },
    contentType: 'application/json; charset=utf-8', // نوع محتوای ارسالی به سرور
    async: true, // تعیین اینکه آیا درخواست به صورت همزمان (Asynchronous) است یا نه
    timeout: 5000, // حداکثر زمان انتظار (به میلی‌ثانیه) قبل از لغو درخواست
    beforeSend: function(xhr) {
        // این تابع قبل از ارسال درخواست اجرا می‌شود
        console.log('درخواست در حال ارسال است...');
        $('#loader').show(); // نمایش یک loader
    },
    success: function(response) {
        // این تابع در صورت موفقیت‌آمیز بودن درخواست اجرا می‌شود
        console.log('پاسخ موفقیت‌آمیز:', response);
        $('#result').html(response.data);
    },
    error: function(xhr, status, error) {
        // این تابع در صورت بروز خطا در درخواست اجرا می‌شود
        console.error('خطا:', error);
        console.log('کد وضعیت:', xhr.status);
        console.log('وضعیت:', status);
    },
    complete: function(xhr, status) {
        // این تابع در هر صورت بعد از پایان درخواست اجرا می‌شود
        console.log('درخواست کامل شد. وضعیت:', status);
        $('#loader').hide(); // پنهان کردن loader
    },
    statusCode: {
        404: function() {
            // مدیریت خطای 404
            console.log('خطا 404: صفحه یافت نشد.');
        },
        500: function() {
            // مدیریت خطای 500
            console.log('خطا 500: خطای سرور.');
        }
    }
});
