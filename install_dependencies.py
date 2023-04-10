import subprocess


try:
    result = subprocess.run(['npm', 'install'], cwd='codewind', check=True, capture_output=True)
    print(result.stdout)
except subprocess.CalledProcessError as e:
    print(f'Error: {e}')
except FileNotFoundError as e:
    print(f'Error: {e}')
except OSError as e:
    print(f'Error: {e}')