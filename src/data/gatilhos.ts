import type { Gatilho } from "../types/scenario";
import { Clock, AlertTriangle, ShieldAlert, Link as Chain, Users, Swords } from "lucide-react";

export const GATILHOS: Record<string, Gatilho> = {
    urgencia: {
        id: "urgencia",
        label: "Urgência",
        icone: Clock,
        cor: "red",
    },
    medo: {
        id: "medo",
        label: "Medo",
        icone: AlertTriangle,
        cor: "orange",
    },
    "autoridade-falsa": {
        id: "autoridade-falsa",
        label: "Autoridade Falsa",
        icone: ShieldAlert,
        cor: "teal",
    },
    corrente: {
        id: "corrente",
        label: "Corrente",
        icone: Chain,
        cor: "purple",
    },
    provocacao: {
    id: "provocacao",
    label: "Provocação",
    icone: AlertTriangle,
    cor: "red",
    },
    "pressao-social": {
    id: "pressao-social",
    label: "Pressão Social",
    icone: Users,
    cor: "orange",
    },
    polarizacao: {
    id: "polarizacao",
    label: "Polarização",
    icone: Swords,
    cor: "purple",
  },
}
