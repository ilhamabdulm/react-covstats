import axios from 'axios';

const API_URL = 'https://indonesia-covid-19.mathdro.id/api';

export const fetchAllData = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return {
      sembuh: data.sembuh,
      aktif: data.perawatan,
      meninggal: data.meninggal,
      totalKasus: data.jumlahKasus,
    };
  } catch (err) {
    return err.response;
  }
};

export const fetchProvinceNames = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/provinsi`);
    const provinceNames = data.data.map((el) => {
      return { value: el.provinsi };
    });
    return provinceNames;
  } catch (err) {
    return err.response;
  }
};

export const fetchProvinceData = async (province) => {
  try {
    const {
      data: { data },
    } = await axios.get(`${API_URL}/provinsi`);
    const selectedProvince = data.filter((el) => el.provinsi === province)[0];
    return {
      sembuh: selectedProvince.kasusSemb,
      meninggal: selectedProvince.kasusMeni,
      aktif: selectedProvince.kasusPosi,
      totalKasus: selectedProvince.kasusPosi,
    };
  } catch (err) {
    return err.response;
  }
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${API_URL}/harian`);
    const structuredData = data.map((el) => {
      return {
        total: el.jumlahKasusKumulatif,
        sembuh: el.jumlahPasienSembuh,
        meninggal: el.jumlahPasienMeninggal,
        kasusBaru: el.jumlahKasusBaruperHari,
        sembuhBaru: el.jumlahKasusSembuhperHari,
        meninggalBaru: el.jumlahKasusMeninggalperHari,
        odp: el.odp,
        pdp: el.pdp,
        tanggal: new Date(el.tanggal).toDateString(),
      };
    });
    return structuredData;
  } catch (err) {
    return err.response;
  }
};
