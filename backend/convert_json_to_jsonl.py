import json
# TODO logging and error handling for converting

data_to_jsonl = []
with open('FAQ.json') as country_json1:
    training_data = json.load(country_json1)

with open('FAQ.jsonl', 'a') as outfile:
    for dataset in training_data:
        answer = dataset['Answer_plain_text']
        questions = set(dataset['Question_original_alternatives'])
        questions.add(dataset['Question_original'])
        for question in questions:
            json_string = json.dumps({'messages':
                [
                    {'role': 'system', 'content': 'You are bot that helps brokers make proper decisions.'},
                    {'role': 'user', 'content': question},
                    {'role': 'assistant', 'content': answer}
                ]
            })
            outfile.write(json_string + '\n')
