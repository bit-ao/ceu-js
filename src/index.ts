import axios from "axios"
import "dotenv/config";
import {
    ApplyDiscountInput,
    ApplyDiscountResponse,
    CeuConfig,
    DiscountHistoryResponse,
    ValidateStudentResponse
} from "./types";

export class CeuClient {
    private static http = axios.create({
        baseURL: process.env.CEU_API_BASE_URL || "https://ceu.ao/api",
        headers: {
            "Content-Type": "application/json",
            "API-TOKEN": process.env.CEU_API_KEY || "",
        },
    })

    static async validateStudent(id: string | number):Promise<ValidateStudentResponse> {
        console.log(this.http.defaults.headers)
        const { data } = await this.http.get<ValidateStudentResponse>(`/validate-student/${id}`)
        return data
    }

    static async applyDiscount(id: string | number, body: ApplyDiscountInput) {
        const { data } = await this.http.post<ApplyDiscountResponse>(`/apply-discount/${id}`, body)
        return data
    }

    static async getDiscountHistory(id: string | number) {
        const { data } = await this.http.get<DiscountHistoryResponse>(`/history/${id}`)
        return data
    }
}


