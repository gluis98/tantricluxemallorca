<?php
$langs = ['it', 'fr'];
foreach ($langs as $lang) {
    if (!is_dir(__DIR__ . "/lang/{$lang}")) {
        mkdir(__DIR__ . "/lang/{$lang}", 0777, true);
    }
    $json = json_decode(file_get_contents(__DIR__ . "/dictionaries/{$lang}.json"), true);
    
    $common = ['header' => $json['header'], 'footer' => $json['footer']];
    file_put_contents(__DIR__ . "/lang/{$lang}/common.php", "<?php\n\nreturn " . var_export($common, true) . ";\n");
    
    file_put_contents(__DIR__ . "/lang/{$lang}/aboutPage.php", "<?php\n\nreturn " . var_export($json['aboutPage'], true) . ";\n");
    file_put_contents(__DIR__ . "/lang/{$lang}/contactPage.php", "<?php\n\nreturn " . var_export($json['contactPage'], true) . ";\n");
    file_put_contents(__DIR__ . "/lang/{$lang}/homepage.php", "<?php\n\nreturn " . var_export($json['homepage'], true) . ";\n");
    file_put_contents(__DIR__ . "/lang/{$lang}/masseusesPage.php", "<?php\n\nreturn " . var_export($json['masseusesPage'], true) . ";\n");
    file_put_contents(__DIR__ . "/lang/{$lang}/servicesPage.php", "<?php\n\nreturn " . var_export($json['servicesPage'], true) . ";\n");
}
echo "Language files generated successfully.";
