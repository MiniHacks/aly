from fastapi import FastAPI
from pydantic import BaseModel
from typing import Union

app = FastAPI()


class WebsiteText(BaseModel):
    heading: Union[str, None]
    title: Union[str, None]
    body: Union[str, None]
    userId: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


async def web_analysis(website: WebsiteText):
    # do some analysis
    return {"message": "woah"}
