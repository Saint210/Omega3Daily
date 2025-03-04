Add-Type -AssemblyName System.Drawing

$file = "BalanceOil+ AquaX without Test.png"
$img = [System.Drawing.Image]::FromFile($file)
$jpgPath = [System.IO.Path]::ChangeExtension($file, "jpg")

# Create new bitmap with same dimensions
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)

# Draw original image onto new bitmap
$graphics.DrawImage($img, 0, 0, $img.Width, $img.Height)

# Save as JPG with 90% quality
$myEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {$_.MimeType -eq 'image/jpeg'}
$myEncoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$myEncoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 90)
$bmp.Save($jpgPath, $myEncoder, $myEncoderParameters)

# Cleanup
$graphics.Dispose()
$bmp.Dispose()
$img.Dispose()
