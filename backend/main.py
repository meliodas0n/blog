import asyncio
import uvicorn
from fastapi import FastAPI


app = FastAPI()


class App:
  async def run() -> None:
      config = uvicorn.Config(
          app,
          port=8000,
          use_colors=True,
          reload=True,
          reload_delay=1,
          log_level="info",
      )
      server = uvicorn.Server(config)
      await server.serve()


if __name__ == "__main__":
  asyncio.run(App.run())
