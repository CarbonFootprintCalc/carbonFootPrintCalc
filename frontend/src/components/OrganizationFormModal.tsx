import React, { useEffect, useState } from 'react';

interface OrganizationFormData {
  organizationName: string;
  address: string;
  startDate: string;
  endDate: string;
  preparerName: string;
  contact: string;
  datePrepared: string;
  [key: string]: string; // Index signature to allow dynamic property access
}

interface OrganizationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: OrganizationFormData) => void;
}

const OrganizationFormModal = ({ isOpen, onClose, onSubmit }: OrganizationFormModalProps) => {
  const [formData, setFormData] = useState<OrganizationFormData>({
    organizationName: '',
    address: '',
    startDate: '',
    endDate: '',
    preparerName: '',
    contact: '',
    datePrepared: ''
  });

  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.organizationName) newErrors.organizationName = 'Required';
    if (!formData.datePrepared) newErrors.datePrepared = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      localStorage.setItem('organizationInfo', JSON.stringify(formData));
      onSubmit(formData);
      onClose();
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('organizationInfo');
    if (saved) setFormData(JSON.parse(saved));
  }, []);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[90%] max-w-xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Organization Info</h2>
        <div className="space-y-3">
          {/* Organization Name */}
          <div>
            <label className="block font-medium">Organization Name<span className="text-red-500">*</span></label>
            <input name="organizationName" onChange={handleChange} value={formData.organizationName} className="w-full p-2 border rounded" placeholder="Techr2 LLC" />
            {errors.organizationName && <p className="text-red-500 text-sm">{errors.organizationName}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium">Address</label>
            <input name="address" onChange={handleChange} value={formData.address} className="w-full p-2 border rounded" placeholder="12477 Broad St SW, Pataskala, OH 43062" />
          </div>

          {/* Reporting Period Start */}
          <div>
            <label className="block font-medium">Start Date</label>
            <input name="startDate" type="date" onChange={handleChange} value={formData.startDate} className="w-full p-2 border rounded" />
          </div>

          {/* Reporting Period End */}
          <div>
            <label className="block font-medium"></label>
            <input name="endDate" type="date" onChange={handleChange} value={formData.endDate} className="w-full p-2 border rounded" />
          </div>

          {/* Preparer Name */}
          <div>
            <label className="block font-medium">Preparer Name</label>
            <input name="preparerName" onChange={handleChange} value={formData.preparerName} className="w-full p-2 border rounded" placeholder="Charles Robbins" />
          </div>

          {/* Contact Email */}
          <div>
            <label className="block font-medium">Contact Email</label>
            <input name="contact" type="email" onChange={handleChange} value={formData.contact} className="w-full p-2 border rounded" placeholder="crobbins@techr2.com" />
          </div>

          {/* Date Prepared */}
          <div>
            <label className="block font-medium">Date Prepared<span className="text-red-500">*</span></label>
            <input name="datePrepared" type="date" onChange={handleChange} value={formData.datePrepared} className="w-full p-2 border rounded" />
            {errors.datePrepared && <p className="text-red-500 text-sm">{errors.datePrepared}</p>}
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationFormModal;
