import gkeepapi
import sys
import json
import keyring

# Zakładając, że masz już token master
master_token = keyring.get_password('google-keep-token', 'bartekr1221@gmail.com')

keep = gkeepapi.Keep()
keep.authenticate('bartekr1221@gmail.com', master_token)

# Pobieranie notatek
notes = keep.all()

# Przygotowanie danych do zwrócenia
notes_data = []
for note in notes:
    notes_data.append({
        'name': note.title,
        'content': note.text,
    })

# Zwróć dane jako JSON
print(json.dumps(notes_data))
