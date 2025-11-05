// ceu-sdk.ts — SDK CEU estático
import axios from "axios"
import {
    ApplyDiscountInput,
    ApplyDiscountResponse,
    CeuConfig,
    DiscountHistoryResponse,
    ValidateStudentResponse
} from "./types";

export class CeuClient {
  private http

  constructor(private config: CeuConfig) {
    this.http = axios.create({
      baseURL: config.baseUrl || "https://ceu.ao/api",
      headers: {
        "Content-Type": "application/json",
        "API-TOKEN": config.apiToken,
      },
    })
  }

  async validateStudent(id: string | number) {
    const { data } = await this.http.get<ValidateStudentResponse>(`/validate-student/${id}`)
    return data
  }

  async applyDiscount(id: string | number, body: ApplyDiscountInput) {
    const { data } = await this.http.post<ApplyDiscountResponse>(`/apply-discount/${id}`, body)
    return data
  }

  async getDiscountHistory(id: string | number) {
    const { data } = await this.http.get<DiscountHistoryResponse>(`/history/${id}`)
    return data
  }
}
