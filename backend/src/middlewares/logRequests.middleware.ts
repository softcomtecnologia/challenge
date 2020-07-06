import { Request, Response, NextFunction } from 'express';

function logRequests(request: Request, response: Response, next: NextFunction) {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;  
  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
}

export default logRequests;