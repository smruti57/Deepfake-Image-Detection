<#
Simple PowerShell helper to create a venv, install requirements, and run the FastAPI server.
Usage: .\run_backend.ps1
#>

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Error "Python not found in PATH. Install Python 3.10+ or use Conda."
    exit 1
}

if (-not (Test-Path .venv)) {
    python -m venv .venv
}

Write-Output "Activating venv..."
. .\.venv\Scripts\Activate.ps1

python -m pip install --upgrade pip setuptools wheel
pip install -r requirements.txt

Write-Output "Starting server..."
uvicorn app:app --reload --host 127.0.0.1 --port 8000
