# Делает лёгкие картинки сертификатов для сайта.
# Запуск из корня репозитория (PowerShell):
#   powershell -ExecutionPolicy Bypass -File tools\make-thumbs.ps1
# Для каждого assets\certs\*.png создаёт:
#   assets\certs\thumbs\<имя>.jpg — превью для карточки (640px)
#   assets\certs\full\<имя>.jpg   — для просмотра на сайте (1600px)
# Готовые файлы пропускает — добавь -Force, чтобы пересоздать все.
param([switch]$Force)

$src = Join-Path $PSScriptRoot "..\assets\certs"
Add-Type -AssemblyName System.Drawing
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

function Save-Resized($file, $outDir, $width, $quality) {
  New-Item -ItemType Directory -Force $outDir | Out-Null
  $dst = Join-Path $outDir ($file.BaseName + '.jpg')
  if ((Test-Path $dst) -and -not $Force) { return }
  $img = [System.Drawing.Image]::FromFile($file.FullName)
  $w = [Math]::Min($width, $img.Width)
  $h = [int]($img.Height * $w / $img.Width)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear([System.Drawing.Color]::White)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.SmoothingMode = 'HighQuality'
  $g.PixelOffsetMode = 'HighQuality'
  $g.DrawImage($img, 0, 0, $w, $h)
  $params = New-Object System.Drawing.Imaging.EncoderParameters 1
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
  $bmp.Save($dst, $codec, $params)
  $g.Dispose(); $bmp.Dispose(); $img.Dispose()
  "{0}: {1:N0} KB -> {2:N0} KB" -f $dst.Replace("$src\", ''), ($file.Length / 1KB), ((Get-Item $dst).Length / 1KB)
}

Get-ChildItem $src -Filter *.png | ForEach-Object {
  Save-Resized $_ (Join-Path $src "thumbs") 640 80
  Save-Resized $_ (Join-Path $src "full") 1600 85
}
