@echo off
echo Obsidian Prolog Plugin Installer
echo ================================
echo.

set /p vault_path=Enter the path to your Obsidian vault: 

if not exist "%vault_path%" (
    echo Error: The specified vault path does not exist.
    goto :end
)

set plugin_dir=%vault_path%\.obsidian\plugins\obsidian-prolog
echo Creating plugin directory at: %plugin_dir%

if not exist "%plugin_dir%" (
    mkdir "%plugin_dir%"
) else (
    echo Plugin directory already exists. Files will be overwritten.
)

echo Copying plugin files...
copy manifest.json "%plugin_dir%\"
copy versions.json "%plugin_dir%\"
copy styles.css "%plugin_dir%\"

if not exist "%plugin_dir%\dist" (
    mkdir "%plugin_dir%\dist"
)
copy dist\main.js "%plugin_dir%\dist\"

echo.
echo Installation complete!
echo.
echo Please follow these steps to enable the plugin:
echo 1. Open Obsidian
echo 2. Go to Settings -^> Community plugins
echo 3. Turn off "Restricted mode" if it's enabled
echo 4. Enable "Prolog for Obsidian" in the list of installed plugins
echo.
echo If the plugin doesn't appear in the list, verify that the manifest.json file was copied correctly.

:end
pause