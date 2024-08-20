<?php
header('Content-Type: application/json');

// بررسی نوع درخواست
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // دریافت داده‌های ارسال شده
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $age = isset($_POST['age']) ? $_POST['age'] : '';

    // اگر نام یا سن ارسال نشده باشد، خطا برگردانید
    if (empty($name) || empty($age)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'نام و سن مورد نیاز است.'
        ]);
        exit;
    }

    // پاسخ موفقیت‌آمیز
    $response = [
        'success' => true,
        'data' => [
            'name' => $name,
            'age' => $age,
            'message' => 'اطلاعات با موفقیت دریافت شد.'
        ]
    ];

    // برگرداندن پاسخ JSON
    echo json_encode($response);

} else {
    // اگر نوع درخواست POST نباشد، خطا برگردانید
    http_response_code(405); // Method Not Allowed
    echo json_encode([
        'success' => false,
        'message' => 'فقط درخواست‌های POST پشتیبانی می‌شود.'
    ]);
}

?>
