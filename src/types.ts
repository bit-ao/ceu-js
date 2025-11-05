/*
 *  Copyright © 2021 - 2050
 *  Bantu Internet Technologies, Lda. Todos os direitos reservados.
 *
 *  Este 'software' é protegido por direitos autorais e é propriedade exclusiva da Bantu Internet Technologies, Lda. Qualquer cópia, distribuição, modificação ou uso não autorizado deste 'software', no todo ou em parte, é estritamente proibido e sujeito às penalidades legais aplicáveis.
 *
 *   Bantu Internet Technologies, Lda.
 *   Rua 25 de Abril, Zona Comercial, Benguela, Angola
 *   geral@bit.ao
 *   www.bit.ao
 *
 *
 */


export interface CeuConfig {
  baseUrl?: string
  apiToken: string
}

export interface ValidateStudentResponse {
  success: boolean
  data?: { id: number; name: string }
  message?: string
}

export interface ApplyDiscountInput {
  amount: number
  partner_id: number
  discount_percentage: number
}

export interface ApplyDiscountResponse {
  success: boolean
  data?: {
    student_id: number
    purchase_amount: number
    discount_applied: number
    final_price: number
  }
  message?: string
}

export interface DiscountHistoryResponse {
  success: boolean
  data?: {
    student_id: number
    student_name: string
    discount_history: {
      id: number
      purchase_amount: number
      discount: number
      final_price: number
      created_at: string
    }[]
  }
  message?: string
}
