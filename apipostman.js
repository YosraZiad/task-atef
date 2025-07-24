src/
  app/
    [locale]/
      customers/
        page.tsx
    api/
      customers/
        route.ts
        [id]/
          route.ts
  components/
    customers/
      CustomerForm.tsx
      CustomerView.tsx
      CustomersTable.tsx
      CustomersToolbar.tsx
      ActionsDropdown.tsx
  types/
    customer.ts
  lib/
    api.ts
  hooks/
    useCustomers.ts


    const axios = require('axios');
let data = JSON.stringify({
  "mobileNumber": "dolore labore",
  "password": "nostrud occaecat",
  "userName": "amet cupidatat fugiat consequat",
  "fullName": "ad in adipisicing incididunt labore",
  "masterMobileNumber": "laborum non nulla enim"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://neosending.com/api/neosending/Whatsapp/customer',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'text/plain', 
    'Authorization': 
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3ODA0NjgxQzMzMzc2NUYwMTMwRkQxQzEwRjZBNEM4QjhFMTk5MzAiLCJ4NXQiOiJSNEJHZ2NNemRsOEJNUDBjRVBha3lMamhtVEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL25lb3NlbmRpbmcuY29tLyIsImV4cCI6MTc4NDAxNjg5NSwiaWF0IjoxNzUyNDgwODk1LCJhdWQiOiJXaGF0c2FwcCIsInNjb3BlIjoiV2hhdHNhcHAiLCJqdGkiOiIwYzI3ZTkyOS02ODZhLTQxNzMtOTgzZS1jMmVkZjUwZjcyZWQiLCJzdWIiOiI4NGU3MmQ0OC0wNWNlLTJmNzgtYjFiMy0zYTFhZGVhMmIxZTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3ZWIiLCJlbWFpbCI6IndlYkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoid2ViIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwicGhvbmVfbnVtYmVyIjoiNzc3Nzc3Nzc3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJ3ZWIiLCJvaV9wcnN0IjoiV2hhdHNhcHBfQXBwIiwiY2xpZW50X2lkIjoiV2hhdHNhcHBfQXBwIiwib2lfdGtuX2lkIjoiNDI2NTQ2YzUtMjBhYi1hMzhjLTQ1M2UtM2ExYjFhMmQyYjJkIn0.JtO8wstX0e9gayzVKJ1_IuyE7TXJBphM0d4rH1PrUKAbRbebLFqHvKXDOg5IYNMlKcreL4SEF4AH3YNrJuKcCfVY74xXF4sK5dFesHZPPy9p208I6yodzh9tYJ9kBDKnDHTW8OivTsYshy2LO9CweVExgNVdsdKWrYMT4k5u9M9a8oZPWQYyiuh9nyi6Hphx25zMToeojHB-ARBvmp9x4Pi3y6_mqJsEiKO6pSSkajiW4KeDLvyyz6Tr2IlSzBxk2ko_ZwXM5iicueVjhqiLIXkzA8YZEZmCUJyRhAiln14w_gRhqhj-b0VYuJRH-mHNENMHvCDb7EQ4C5ppMgZ-NA'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://neosending.com/api/neosending/Whatsapp/customer/13426670',
  headers: { 
    'Accept': 'text/plain', 
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3ODA0NjgxQzMzMzc2NUYwMTMwRkQxQzEwRjZBNEM4QjhFMTk5MzAiLCJ4NXQiOiJSNEJHZ2NNemRsOEJNUDBjRVBha3lMamhtVEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL25lb3NlbmRpbmcuY29tLyIsImV4cCI6MTc4NDAxNjg5NSwiaWF0IjoxNzUyNDgwODk1LCJhdWQiOiJXaGF0c2FwcCIsInNjb3BlIjoiV2hhdHNhcHAiLCJqdGkiOiIwYzI3ZTkyOS02ODZhLTQxNzMtOTgzZS1jMmVkZjUwZjcyZWQiLCJzdWIiOiI4NGU3MmQ0OC0wNWNlLTJmNzgtYjFiMy0zYTFhZGVhMmIxZTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3ZWIiLCJlbWFpbCI6IndlYkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoid2ViIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwicGhvbmVfbnVtYmVyIjoiNzc3Nzc3Nzc3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJ3ZWIiLCJvaV9wcnN0IjoiV2hhdHNhcHBfQXBwIiwiY2xpZW50X2lkIjoiV2hhdHNhcHBfQXBwIiwib2lfdGtuX2lkIjoiNDI2NTQ2YzUtMjBhYi1hMzhjLTQ1M2UtM2ExYjFhMmQyYjJkIn0.JtO8wstX0e9gayzVKJ1_IuyE7TXJBphM0d4rH1PrUKAbRbebLFqHvKXDOg5IYNMlKcreL4SEF4AH3YNrJuKcCfVY74xXF4sK5dFesHZPPy9p208I6yodzh9tYJ9kBDKnDHTW8OivTsYshy2LO9CweVExgNVdsdKWrYMT4k5u9M9a8oZPWQYyiuh9nyi6Hphx25zMToeojHB-ARBvmp9x4Pi3y6_mqJsEiKO6pSSkajiW4KeDLvyyz6Tr2IlSzBxk2ko_ZwXM5iicueVjhqiLIXkzA8YZEZmCUJyRhAiln14w_gRhqhj-b0VYuJRH-mHNENMHvCDb7EQ4C5ppMgZ-NA'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://neosending.com/api/neosending/Whatsapp/customer/13426670',
  headers: { 
    'Accept': 'text/plain', 
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3ODA0NjgxQzMzMzc2NUYwMTMwRkQxQzEwRjZBNEM4QjhFMTk5MzAiLCJ4NXQiOiJSNEJHZ2NNemRsOEJNUDBjRVBha3lMamhtVEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL25lb3NlbmRpbmcuY29tLyIsImV4cCI6MTc4NDAxNjg5NSwiaWF0IjoxNzUyNDgwODk1LCJhdWQiOiJXaGF0c2FwcCIsInNjb3BlIjoiV2hhdHNhcHAiLCJqdGkiOiIwYzI3ZTkyOS02ODZhLTQxNzMtOTgzZS1jMmVkZjUwZjcyZWQiLCJzdWIiOiI4NGU3MmQ0OC0wNWNlLTJmNzgtYjFiMy0zYTFhZGVhMmIxZTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3ZWIiLCJlbWFpbCI6IndlYkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoid2ViIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwicGhvbmVfbnVtYmVyIjoiNzc3Nzc3Nzc3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJ3ZWIiLCJvaV9wcnN0IjoiV2hhdHNhcHBfQXBwIiwiY2xpZW50X2lkIjoiV2hhdHNhcHBfQXBwIiwib2lfdGtuX2lkIjoiNDI2NTQ2YzUtMjBhYi1hMzhjLTQ1M2UtM2ExYjFhMmQyYjJkIn0.JtO8wstX0e9gayzVKJ1_IuyE7TXJBphM0d4rH1PrUKAbRbebLFqHvKXDOg5IYNMlKcreL4SEF4AH3YNrJuKcCfVY74xXF4sK5dFesHZPPy9p208I6yodzh9tYJ9kBDKnDHTW8OivTsYshy2LO9CweVExgNVdsdKWrYMT4k5u9M9a8oZPWQYyiuh9nyi6Hphx25zMToeojHB-ARBvmp9x4Pi3y6_mqJsEiKO6pSSkajiW4KeDLvyyz6Tr2IlSzBxk2ko_ZwXM5iicueVjhqiLIXkzA8YZEZmCUJyRhAiln14w_gRhqhj-b0VYuJRH-mHNENMHvCDb7EQ4C5ppMgZ-NA'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'https://neosending.com/api/neosending/Whatsapp/customer/13426670',
  headers: { 
    'Accept': 'text/plain', 
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3ODA0NjgxQzMzMzc2NUYwMTMwRkQxQzEwRjZBNEM4QjhFMTk5MzAiLCJ4NXQiOiJSNEJHZ2NNemRsOEJNUDBjRVBha3lMamhtVEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL25lb3NlbmRpbmcuY29tLyIsImV4cCI6MTc4NDAxNjg5NSwiaWF0IjoxNzUyNDgwODk1LCJhdWQiOiJXaGF0c2FwcCIsInNjb3BlIjoiV2hhdHNhcHAiLCJqdGkiOiIwYzI3ZTkyOS02ODZhLTQxNzMtOTgzZS1jMmVkZjUwZjcyZWQiLCJzdWIiOiI4NGU3MmQ0OC0wNWNlLTJmNzgtYjFiMy0zYTFhZGVhMmIxZTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3ZWIiLCJlbWFpbCI6IndlYkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoid2ViIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwicGhvbmVfbnVtYmVyIjoiNzc3Nzc3Nzc3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJ3ZWIiLCJvaV9wcnN0IjoiV2hhdHNhcHBfQXBwIiwiY2xpZW50X2lkIjoiV2hhdHNhcHBfQXBwIiwib2lfdGtuX2lkIjoiNDI2NTQ2YzUtMjBhYi1hMzhjLTQ1M2UtM2ExYjFhMmQyYjJkIn0.JtO8wstX0e9gayzVKJ1_IuyE7TXJBphM0d4rH1PrUKAbRbebLFqHvKXDOg5IYNMlKcreL4SEF4AH3YNrJuKcCfVY74xXF4sK5dFesHZPPy9p208I6yodzh9tYJ9kBDKnDHTW8OivTsYshy2LO9CweVExgNVdsdKWrYMT4k5u9M9a8oZPWQYyiuh9nyi6Hphx25zMToeojHB-ARBvmp9x4Pi3y6_mqJsEiKO6pSSkajiW4KeDLvyyz6Tr2IlSzBxk2ko_ZwXM5iicueVjhqiLIXkzA8YZEZmCUJyRhAiln14w_gRhqhj-b0VYuJRH-mHNENMHvCDb7EQ4C5ppMgZ-NA'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});



إعداد بيئة المشروع Next.js و shadcn/ui
تطبيق الوضع الليلي والنهاري وتعدد اللغات
تطوير واجهات المستخدم بناءً على التصاميم السابقة
تكامل الـ APIs مع الواجهة الأمامية
اختبار شامل للمشروع وتصحيح الأخطاء

تسليم المشروع كاملاً وخالياً من الأخطاء


// src/app/[locale]/customers/page.tsx
'use client';

import { useTranslations ,useLocale } from "next-intl"
import { CustomersTable } from '@/components/customers/CustomersTable';
import { CustomersToolbar } from '@/components/customers/CustomersToolbar';
import { useCustomers } from '@/hooks/useCustomers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types/customer';

export default function CustomersPage() {
  const t = useTranslations('Customers');
  const locale = useLocale()
  
  const { customers = [], loading, error, refetch } = useCustomers();
  const { theme } = useTheme();
  const router = useRouter();

  const handleView = (customer: Customer) => {
    router.push(`/${locale}/customers/${customer.id}`);
  };

  const handleEdit = (customer: Customer) => {
    router.push(`/${locale}/customers/${customer.id}/edit`);
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/customers/${id}`, {
        method: 'DELETE',
      });
      await refetch(); // انتظار إعادة جلب البيانات
    } catch (error) {
      console.error('Error deleting customer:', error);
      throw error; // إعادة رمي الخطأ للتعامل معه في CustomersTable
    }
  };

  const handleRefresh = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error('Error refreshing customers:', error);
      throw error;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <Card className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{t('title')}</CardTitle>
            <Link href={`/${locale}/customers/add`} passHref>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                {t('addCustomer')}
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <CustomersToolbar onRefresh={handleRefresh} />
          <CustomersTable
            customers={customers}
            loading={loading}
            error={error}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onRefresh={handleRefresh}
          />
        </CardContent>
      </Card>
    </div>
  );
}

import { NextResponse } from 'next/server';
import axios from 'axios';

const API_BASE = 'https://neosending.com/api/neosending/Whatsapp';
const API_TOKEN = process.env.API_TOKEN || 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3ODA0NjgxQzMzMzc2NUYwMTMwRkQxQzEwRjZBNEM4QjhFMTk5MzAiLCJ4NXQiOiJSNEJHZ2NNemRsOEJNUDBjRVBha3lMamhtVEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL25lb3NlbmRpbmcuY29tLyIsImV4cCI6MTc4NDAxNjg5NSwiaWF0IjoxNzUyNDgwODk1LCJhdWQiOiJXaGF0c2FwcCIsInNjb3BlIjoiV2hhdHNhcHAiLCJqdGkiOiIwYzI3ZTkyOS02ODZhLTQxNzMtOTgzZS1jMmVkZjUwZjcyZWQiLCJzdWIiOiI4NGU3MmQ0OC0wNWNlLTJmNzgtYjFiMy0zYTFhZGVhMmIxZTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3ZWIiLCJlbWFpbCI6IndlYkBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoid2ViIiwiZmFtaWx5X25hbWUiOiJ0ZXN0IiwicGhvbmVfbnVtYmVyIjoiNzc3Nzc3Nzc3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJ3ZWIiLCJvaV9wcnN0IjoiV2hhdHNhcHBfQXBwIiwiY2xpZW50X2lkIjoiV2hhdHNhcHBfQXBwIiwib2lfdGtuX2lkIjoiNDI2NTQ2YzUtMjBhYi1hMzhjLTQ1M2UtM2ExYjFhMmQyYjJkIn0.JtO8wstX0e9gayzVKJ1_IuyE7TXJBphM0d4rH1PrUKAbRbebLFqHvKXDOg5IYNMlKcreL4SEF4AH3YNrJuKcCfVY74xXF4sK5dFesHZPPy9p208I6yodzh9tYJ9kBDKnDHTW8OivTsYshy2LO9CweVExgNVdsdKWrYMT4k5u9M9a8oZPWQYyiuh9nyi6Hphx25zMToeojHB-ARBvmp9x4Pi3y6_mqJsEiKO6pSSkajiW4KeDLvyyz6Tr2IlSzBxk2ko_ZwXM5iicueVjhqiLIXkzA8YZEZmCUJyRhAiln14w_gRhqhj-b0VYuJRH-mHNENMHvCDb7EQ4C5ppMgZ-NA';

// دالة لجلب بيانات عميل معين
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      { success: false, error: 'Invalid customer ID' },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(`${API_BASE}/customer/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': API_TOKEN
      }
    });

    return NextResponse.json({
      success: true,
      data: response.data
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch customer'
      },
      { status: 500 }
    );
  }
}

// دالة لتحديث بيانات عميل
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      { success: false, error: 'معرف العميل غير صالح' },
      { status: 400 }
    );
  }

  try {
    const requestData = await request.json();

    const response = await axios.put(`${API_BASE}/customer/${id}`, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': API_TOKEN
      },
      timeout: 15000
    });

    return NextResponse.json({
      success: true,
      data: response.data
    });

  } catch (error: any) {
    console.error('خطأ في تحديث العميل:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'فشل في تحديث بيانات العميل',
        details: error.response?.data || error.message
      },
      { status: error.response?.status || 500 }
    );
  }
}

// دالة لحذف عميل
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      { success: false, error: 'معرف العميل غير صالح' },
      { status: 400 }
    );
  }

  try {
    const response = await axios.delete(`${API_BASE}/customer/${id}`, {
      headers: {
        'Accept': 'application/json', // Changed from text/plain
        'Content-Type': 'application/json', // Added content type
        'Authorization': API_TOKEN // Ensure proper token format
      },
      timeout: 10000
    });

    return NextResponse.json({
      success: true,
      message: 'تم حذف العميل بنجاح',
      data: response.data
    });

  } catch (error: any) {
    console.error('خطأ في حذف العميل:', error);
    
    // More detailed error handling
    const errorMessage = error.response?.data?.message || 
                        error.message || 
                        'فشل في حذف العميل';
    
    const errorDetails = error.response?.data?.errors || 
                        error.response?.data;

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details: errorDetails
      },
      { status: error.response?.status || 500 }
    );
  }
}
export const dynamic = 'force-dynamic';

