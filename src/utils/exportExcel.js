import apiClient from '../services/api.service';
const xlsx = require('xlsx');

export const exportExcelContactCompanies = async () => {
  try {
    const datas = await apiClient.get('/export-excel/excelcontactcompanies');
    let workSheetColumnNames = datas.data.workSheetColumnNames;
    let workSheetValues = datas.data.workSheetValues;
    const workSheetName = '';
    let data = workSheetValues;
    const workBook = xlsx.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    return xlsx.writeFile(workBook, 'ContactosEmpresas.xlsx');
  } catch ({ error }) {
    return error.message;
  }
};

export const exportExcelWorkProfile = async () => {
  try {
    const datas = await apiClient.get('/export-excel/excelworkprofiles');
    let workSheetColumnNames = datas.data.workSheetColumnNames;
    let workSheetValues = datas.data.workSheetValues;
    const workSheetName = '';
    let data = workSheetValues;
    const workBook = xlsx.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    return xlsx.writeFile(workBook, 'WorkProfiles.xlsx');
  } catch ({ error }) {
    return error.message;
  }
};
