import uvicorn
from fastapi import FastAPI

if __name__ == "__main__":
    app = FastAPI()
    uvicorn.run(app = "app", host = "localhost", port = 5000, reload = True)
