# Делает лёгкие превью сертификатов для сайта.
# Запуск из корня репозитория (PowerShell):
#   powershell -ExecutionPolicy Bypass -File tools\make-thumbs.ps1
# Берёт каждый assets\certs\*.png и кладёт сжатую копию в assets\certs\thumbs\<имя>.jpg
# (ширина 640px). Готовые превью пропускает — добавь -Force, чтобы пересоздать все.
param([int]$Width = 640, [long]$Quality = 80, [switch]$Force)

$src = Join-Path $PSScriptRoot "..\assets\certs"
$out = Join-Path $src "thumbs"
Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force $out | Out-Null

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, $Quality)

Get-ChildItem $src -Filter *.png | ForEach-Object {
  $dst = Join-Path $out ($_.BaseName + '.jpg')
  if ((Test-Path $dst) -and -not $Force) { return }
  $img = [System.Drawing.Image]::FromFile($_.FullName)
  $w = [Math]::Min($Width, $img.Width)
  $h = [int]($img.Height * $w / $img.Width)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear([System.Drawing.Color]::White)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.SmoothingMode = 'HighQuality'
  $g.PixelOffsetMode = 'HighQuality'
  $g.DrawImage($img, 0, 0, $w, $h)
  $bmp.Save($dst, $codec, $params)
  $g.Dispose(); $bmp.Dispose(); $img.Dispose()
  "{0}: {1:N0} KB -> {2:N0} KB" -f $_.Name, ($_.Length / 1KB), ((Get-Item $dst).Length / 1KB)
}
