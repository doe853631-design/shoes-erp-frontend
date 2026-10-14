import React, { useState } from 'react';
import { Package, Truck, ShoppingCart, Users, Settings, AlertCircle, TrendingUp, Search, Upload } from 'lucide-react';

export default function App() {
  const [activeRole, setActiveRole] = useState('owner');

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-slate-900 text-white p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-wide text-amber-400 mb-6">ShoeERP System</h1>
          
          <p className="text-xs text-gray-400 mb-2 uppercase font-semibold">Switch User Role</p>
          <div className="space-y-1">
            {[
              { id: 'owner', label: '1. Owner Dashboard', icon: TrendingUp },
              { id: 'manager', label: '2. Manager Panel', icon: Users },
              { id: 'it_expert', label: '3. IT & Inventory Admin', icon: Settings },
              { id: 'customer_care', label: '4. Customer Care', icon: ShoppingCart },
              { id: 'packaging', label: '5. Packaging & Dispatch', icon: Package },
            ].map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    activeRole === role.id ? 'bg-amber-500 text-slate-900 font-bold' : 'hover:bg-slate-800 text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center border-t border-slate-800 pt-4">
          Status: <span className="text-emerald-400">Connected to Backend</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        
        {/* ================= 1. OWNER DASHBOARD ================= */}
        {activeRole === 'owner' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Owner Dashboard & Analytics</h2>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-sm font-semibold text-gray-500">Total Net Income (Delivered)</p>
                <h3 className="text-3xl font-bold text-emerald-600 mt-2">৳ ১,৪৫,০০০</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-sm font-semibold text-gray-500">Courier & Commission Cost</p>
                <h3 className="text-3xl font-bold text-rose-500 mt-2">৳ ১৮,৪০০</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-sm font-semibold text-gray-500">Total Return Ratio</p>
                <h3 className="text-3xl font-bold text-amber-500 mt-2">৪.২%</h3>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="text-amber-600 w-5 h-5" />
                <h4 className="font-bold text-amber-800">Business Suggestion & Cost Alert</h4>
              </div>
              <p className="text-sm text-amber-900 mt-1">
                বিগত ৩ সপ্তাহে রিটার্ন পার্সেলের কারণে প্রফিট ৫% কমেছে। কাস্টমার কেয়ার টিমকে পার্সেল কনফার্মেশনের সময় কলার আইডি ও এড্রেস রিচেক করতে টাস্ক দিন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Assign Task to Employees</h3>
              <div className="flex space-x-4">
                <select className="border p-2 rounded-lg text-sm bg-white">
                  <option>Select Employee (e.g. Customer Care)</option>
                  <option>Packaging Team</option>
                  <option>IT Expert</option>
                </select>
                <input type="text" placeholder="Task details (e.g., Edit product images or handle social media)" className="border p-2 rounded-lg text-sm flex-1" />
                <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800">
                  Assign Task
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. MANAGER PANEL ================= */}
        {activeRole === 'manager' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Manager Inventory Overview</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold mb-4">Stock Warning & Reorder Suggestions</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-rose-50 border border-rose-200 rounded-lg">
                  <div>
                    <span className="font-bold text-rose-800">SKU: SHOE-BLK-42</span> (Leather Executive Boot)
                    <p className="text-xs text-rose-600">Warehouse Stock: 2 pcs | Showroom Stock: 5 pcs</p>
                  </div>
                  <span className="bg-rose-600 text-white text-xs px-3 py-1 rounded-full font-bold">Stock Low - Order More</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3. IT EXPERT & INVENTORY ================= */}
        {activeRole === 'it_expert' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">IT Expert & System Reconciliation</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h3 className="font-bold text-lg">Upload Steadfast Monthly Export CSV</h3>
              <div className="flex items-center space-x-4">
                <input type="file" accept=".csv" className="border p-2 rounded-lg text-sm" />
                <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Process CSV Reconciliation</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= 4. CUSTOMER CARE ================= */}
        {activeRole === 'customer_care' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Customer Care & Order Creation</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h3 className="font-bold">Create New Order & Check Warehouse Stock</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Invoice ID (e.g. INV-1002)" className="border p-2 rounded-lg text-sm" />
                <input type="text" placeholder="Customer Name" className="border p-2 rounded-lg text-sm" />
                <input type="text" placeholder="Phone Number" className="border p-2 rounded-lg text-sm" />
                <input type="text" placeholder="SKU Code (e.g. SHOE-BLK-42)" className="border p-2 rounded-lg text-sm" />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700">
                Check Stock & Submit Order
              </button>
            </div>
          </div>
        )}

        {/* ================= 5. PACKAGING & DISPATCH ================= */}
        {activeRole === 'packaging' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Packaging & Stock Recheck Panel</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold mb-4">Pending Packaging Orders</h3>
              <div className="border rounded-lg p-4 flex justify-between items-center bg-gray-50">
                <div>
                  <p className="font-bold text-sm">Invoice: #INV-8891 | SKU: SHOE-BRN-41</p>
                  <p className="text-xs text-gray-500">Source: Warehouse</p>
                </div>
                <div className="space-x-2">
                  <button className="bg-emerald-600 text-white text-xs px-4 py-2 rounded-lg font-bold">
                    Confirm Ready to Courier
                  </button>
                  <button className="bg-rose-600 text-white text-xs px-4 py-2 rounded-lg font-bold">
                    Alert Care (Warehouse Empty - Need Showroom)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}