import { z } from "zod";
// import { emailRegex, fullnameRegex } from "./regex";

export const schema = z.object({
  fullname: z
    .string()
    .min(1, "Nama lengkap harus diisi")
    .refine(
      (value) =>
        !/(g[o0]bl[o0][kg]|gbl[gk]|k[o0ui]nt[o0ui]l|m[e3]m[e3]k|g[o0]b|k[o0]n|k[o0]ns|mmk|kntl|[@a4]jg|[@4a]njing|k[e3]m[e3]m|t[o0]l[o0]l|ng[e3]nt[o0][td]|[e3]w[e3]|[e3]w[e3][a@4]n|b[e3]g[o0]|t[a@4]i|ngnt[td]|[4a@]su|r[3e]st[4a@]|itil|ngnt[o0][td]|b[a@4]b[il]|kunyu[ck]|b[a@4]jing[a@4]n|b[a@4]ngs[a@4]t|k[a@4]mpret|pentil|pepek|benc[o0]ng|b[a@4]nci|m[a@4]h[o0]|gil[a@4]|sinting|s[a@4]r[a@4]p|l[o0]nte|henceut|k[a@4]mp[a@4]ng|gembel|[a@4]njrit|fuck|tetek|[a@4]ssh[o0]le|dick|v[a@4]gin[a@4]|ngulum|jembut|jembud|jmbt|jmbd|pukim[a@4]k|j[a@4]ncuk|j[a@4]nc[o0]k|jnck|titit|nenen|ttd|titid|tytyd|tytid|tityd|silit|semp[a@4]k|fucking|[a@4]ssh[o0]les|bitch|penis|pussy|sex|klit[o0]ris|p[a@4]ntek|kelentit|d[a@4]ncuk|t[a@4]ek|p[a@4]nt[a@4]t|p[a@4]nt[a@4]d|idi[o0]t|kim[a@4]k|bl[o0]wj[o0]b|d[a@4]mn|[a@4]ss|sep[o0]nk|sep[o0]ng|sp[o0]ng|sp[o0]nk|nyep[o0]ng|nyep[o0]nk|nyp[o0]nk|nyp[o0]ng|t[a@4]ik|meki|c[o0]l[o0]k|c[o0]lmek|c[o0]li|m[a@4]sturb[a@4]si|on[a@4]ni)\b/gi.test(
          value
        ),
      "Kata tersebut tidak diperbolehkan"
    ),

  email: z
    .string()
    .min(1, "Email harus disii")
    .email("Email harus valid")
    .refine(
      (value) =>
        !/(g[o0]bl[o0][kg]|gbl[gk]|k[o0ui]nt[o0ui]l|m[e3]m[e3]k|g[o0]b|k[o0]n|k[o0]ns|mmk|kntl|[@a4]jg|[@4a]njing|k[e3]m[e3]m|t[o0]l[o0]l|ng[e3]nt[o0][td]|[e3]w[e3]|[e3]w[e3][a@4]n|b[e3]g[o0]|t[a@4]i|ngnt[td]|[4a@]su|r[3e]st[4a@]|itil|ngnt[o0][td]|b[a@4]b[il]|kunyu[ck]|b[a@4]jing[a@4]n|b[a@4]ngs[a@4]t|k[a@4]mpret|pentil|pepek|benc[o0]ng|b[a@4]nci|m[a@4]h[o0]|gil[a@4]|sinting|s[a@4]r[a@4]p|l[o0]nte|henceut|k[a@4]mp[a@4]ng|gembel|[a@4]njrit|fuck|tetek|[a@4]ssh[o0]le|dick|v[a@4]gin[a@4]|ngulum|jembut|jembud|jmbt|jmbd|pukim[a@4]k|j[a@4]ncuk|j[a@4]nc[o0]k|jnck|titit|nenen|ttd|titid|tytyd|tytid|tityd|silit|semp[a@4]k|fucking|[a@4]ssh[o0]les|bitch|penis|pussy|sex|klit[o0]ris|p[a@4]ntek|kelentit|d[a@4]ncuk|t[a@4]ek|p[a@4]nt[a@4]t|p[a@4]nt[a@4]d|idi[o0]t|kim[a@4]k|bl[o0]wj[o0]b|d[a@4]mn|[a@4]ss|sep[o0]nk|sep[o0]ng|sp[o0]ng|sp[o0]nk|nyep[o0]ng|nyep[o0]nk|nyp[o0]nk|nyp[o0]ng|t[a@4]ik|meki|c[o0]l[o0]k|c[o0]lmek|c[o0]li|m[a@4]sturb[a@4]si|on[a@4]ni)\b/gi.test(
          value
        ),
      "Kata tersebut tidak diperbolehkan"
    ),
  phoneNumber: z
    .string()
    .min(1, "Nomor handphone harus diisi")
    .min(10, "Nomor handphone Minimal 10 digit")
    .max(13, "Nomor handphone Maksimal 13 digit"),
  nim: z
    .string()
    .min(1, "Nim harus diisi")
    .min(14, "Nim minimal harus 14 digit")
    .max(14, "Nim maksimal harus 14 digit")
    .refine((value) => /^\d+$/.test(value), "Nim harus berupa angka"),
  class: z.string().min(1, "Kelas harus diisi"),
  generation: z.string().min(1, "Angkatan Harus diisi"),
  historySicknes: z.string().min(1, "Riwayat Penyakit Harus di isi")
});
