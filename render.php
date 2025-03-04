<?php
$page = $_GET['page'] ?? 'index.html';
ob_start();
include $page;
$content = ob_get_clean();

$content = preg_replace_callback(
    '/{% include \'(.*?)\' %}/',
    function($matches) {
        return file_get_contents($matches[1]);
    },
    $content
);

echo $content;
?>
