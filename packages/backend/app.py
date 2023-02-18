from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class WebsiteText(BaseModel):
    heading: str | None
    title: str | None
    body: str | None
    userId: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


async def web_analysis(website: WebsiteText):
    # do some analysis
    return {"message": "woah"}
