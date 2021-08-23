import {HttpErrorResponse} from "@angular/common/http";

export enum EntityStatus {
  Pending,
  Success,
  Error
}

export interface Entity<T> {
  value?: T,
  status?: EntityStatus,
  error?: HttpErrorResponse
}
