$imageDir = ".\images"
$maxWidth = 1200  # Maximum width for large screens
$mobileWidth = 768  # Width for mobile screens

# Create mobile-optimized directory if it doesn't exist
$mobileDir = Join-Path $imageDir "mobile"
if (-not (Test-Path $mobileDir)) {
    New-Item -ItemType Directory -Path $mobileDir | Out-Null
}

Get-ChildItem $imageDir -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png)$' } | ForEach-Object {
    $file = $_
    $baseName = [System.IO.Path.GetFileNameWithoutExtension($file.Name)]
    
    # Skip if file is already in mobile directory
    if ($file.DirectoryName -eq $mobileDir) {
        return
    }

    # Create WebP version for modern browsers
    $webpOutput = Join-Path $mobileDir "$baseName.webp"
    magick $file.FullName -strip -quality 80 -resize "$maxWidth>" -define webp:lossless=false -define webp:method=6 $webpOutput

    # Create mobile-optimized WebP
    $mobileWebp = Join-Path $mobileDir "$baseName-mobile.webp"
    magick $file.FullName -strip -quality 75 -resize "$mobileWidth>" -define webp:lossless=false -define webp:method=6 $mobileWebp

    # Create fallback JPEG for older browsers
    $jpegOutput = Join-Path $mobileDir "$baseName.jpg"
    magick $file.FullName -strip -quality 85 -resize "$maxWidth>" $jpegOutput

    Write-Host "Optimized: $($file.Name)"
}
