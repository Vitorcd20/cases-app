"use server"

import { db } from '@/db'
import { OrderStatus } from '@prisma/client'

export const changeOrderStatus = async ({
    id,
    newStatus,
  }: {
    id: string
    newStatus: OrderStatus
  }) => {
    try {
      await db.order.update({
        where: { id },
        data: { status: newStatus },
      });
      console.log(`Status da ordem ${id} atualizado para ${newStatus}`);
    } catch (error) {
      console.error(`Erro ao atualizar status da ordem ${id}:`, error);
      throw error; // rethrow para permitir tratamento adicional, se necessário
    }
  };
  