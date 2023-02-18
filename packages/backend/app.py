from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class WebsiteText(BaseModel):
    heading: Union[str, None]
    title: Union[str, None]
    body: Union[str, None]
    userId: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/web_analysis")
async def web_analysis(website: WebsiteText):
    # do some analysis
    return {"message": "woah"}
