import os
import openai # todo add while true loop for waiting for job to finish

key = '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'
openai.api_key = key
# print(openai.File.create(file=open("FAQ.jsonl", "rb"), purpose='fine-tune'))
# files = openai.File.list()
# print(files)
# file-w10QNu7z3NM7rp9vOU61JOaj
# [openai.File.delete(file['id']) for file in files['data']]


# print(openai.FineTuningJob.create(training_file="file-cpXsw7YC6v4PWI9Jd0xMSGSl", model="gpt-3.5-turbo"))
# ftjob-rH2PHbZ2WVi9Nuh937le6lnP JOBID
# print(openai.FineTuningJob.list())
# print(openai.FineTuningJob.retrieve('ftjob-rH2PHbZ2WVi9Nuh937le6lnP'))

completion = openai.ChatCompletion.create(
  model="ft:gpt-3.5-turbo-0613:personal::877QkFKt",
  messages=[
    {"role": "system", "content": "You are a bot that helps brokers."},
    {"role": "user", "content": "What's the capital of Hobbit lands?"}
  ]
)
print(completion.choices[0].message)