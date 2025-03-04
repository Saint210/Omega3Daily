@echo off
setlocal enabledelayedexpansion

:: Check for Python installation
where python >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python not found in PATH
    echo Please install Python 3.6+ from https://www.python.org/downloads/
    echo Then restart your computer and try again
    pause
    exit /b 1
)

:: Verify Python version
python --version 2>&1 | findstr /r /c:"Python 3\.[6-9]" >nul
if %errorlevel% neq 0 (
    echo Error: Requires Python 3.6 or newer
    echo Installed version:
    python --version
    pause
    exit /b 1
)

:: Execute database setup
echo Creating database...
python setup_database.py

if %errorlevel% neq 0 (
    echo Error: Database creation failed
    pause
    exit /b 1
)

echo Database created successfully in: %cd%\omega3.db
pause
