@echo off
echo Obsidian Prolog Plugin Release Creator
echo =====================================
echo.

set release_dir=release
set plugin_name=obsidian-prolog

if exist %release_dir% (
    echo Cleaning previous release directory...
    rd /s /q %release_dir%
)

echo Creating release directory...
mkdir %release_dir%
mkdir %release_dir%\dist

echo Copying plugin files...
copy manifest.json %release_dir%\
copy versions.json %release_dir%\
copy styles.css %release_dir%\
copy dist\main.js %release_dir%\dist\
copy install-plugin.bat %release_dir%\
copy README.md %release_dir%\

echo Creating ZIP archive...
powershell Compress-Archive -Path %release_dir%\* -DestinationPath %plugin_name%.zip -Force

echo.
echo Release package created: %plugin_name%.zip
echo.
echo This ZIP file contains all necessary files for installation, including:
echo - manifest.json (essential for Obsidian to recognize the plugin)
echo - versions.json (version history)
echo - styles.css (plugin styles)
echo - dist/main.js (compiled plugin code)
echo - install-plugin.bat (installation script for Windows users)
echo - README.md (documentation and installation instructions)
echo.
echo Users can either use the installation script or follow the manual installation instructions in the README.

pause