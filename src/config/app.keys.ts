import "dotenv/config"

export interface IEnv {
  PORT: number
  API_VERSION: string
  API_PATH: string
  ENVIRONMENT: string
  ALLOWED_ORIGINS: string
}

const Env: IEnv = {
  PORT: Number(process.env.PORT),
  API_PATH: "/api/" + process.env.API_PATH,
  API_VERSION: process.env.API_VERSION as string,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS as string,
  ENVIRONMENT: process.env.ENVIRONMENT as string,
}

export default Env
