import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const navigation = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'project', label: 'Проект', icon: 'FileText' },
    { id: 'calculations', label: 'Расчёты', icon: 'Calculator' },
    { id: 'presentation', label: 'Презентация', icon: 'Presentation' },
    { id: 'roi', label: 'ROI', icon: 'TrendingUp' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  // Расчеты для таблиц
  const pilotCalculations = {
    middle: [
      { variant: 'Минимум', days: 6, cost: 1800000, savings: 6525750, roi: 263 },
      { variant: 'Оптимум', days: 12, cost: 3300000, savings: 9322500, roi: 182 },
      { variant: 'Максимум', days: 18, cost: 4800000, savings: 11187000, roi: 133 }
    ],
    senior: [
      { variant: 'Минимум', days: 6, cost: 2550000, savings: 9788625, roi: 284 },
      { variant: 'Оптимум', days: 12, cost: 4800000, savings: 13983750, roi: 191 },
      { variant: 'Максимум', days: 18, cost: 7050000, savings: 16780500, roi: 138 }
    ]
  };

  const scaleCalculations = {
    middle: [
      { variant: 'Минимум', trainers: 2, cost: 62250000, savings: 217525000, roi: 249 },
      { variant: 'Оптимум', trainers: 4, cost: 114500000, savings: 310750000, roi: 171 },
      { variant: 'Максимум', trainers: 5, cost: 166750000, savings: 372900000, roi: 124 }
    ],
    senior: [
      { variant: 'Минимум', trainers: 2, cost: 88375000, savings: 326287500, roi: 269 },
      { variant: 'Оптимум', trainers: 4, cost: 166750000, savings: 466125000, roi: 179 },
      { variant: 'Максимум', trainers: 5, cost: 245125000, savings: 559350000, roi: 128 }
    ]
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  const renderMainSection = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-6">
          Финансовое обоснование проекта внедрения программы улучшения коммуникаций
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Проект "Как навести порядок в коммуникациях" для АНО Россия
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            ROI до 284%
          </Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Экономия до 40%
          </Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Ускорение процессов на 30%
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="text-center">
            <Icon name="AlertTriangle" size={48} className="mx-auto text-red-500 mb-2" />
            <CardTitle className="text-2xl text-red-600">70%</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>проектов терпят неудачу из-за коммуникационных проблем (McKinsey)</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center">
            <Icon name="TrendingDown" size={48} className="mx-auto text-orange-500 mb-2" />
            <CardTitle className="text-2xl text-orange-600">9 трлн ₽</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>годовые потери российских компаний из-за плохих коммуникаций</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="text-center">
            <Icon name="Target" size={48} className="mx-auto text-green-500 mb-2" />
            <CardTitle className="text-2xl text-green-600">20-25%</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>увеличение вовлечённости сотрудников после обучения</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProjectSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Описание проекта</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Target" size={24} />
              Цели проекта
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-1" />
                <span>Повысить эффективность коммуникаций</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-1" />
                <span>Снизить издержки на переделки</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-1" />
                <span>Улучшить вовлечённость сотрудников</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-500 mt-1" />
                <span>Укрепить корпоративную культуру</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BookOpen" size={24} />
              Программы обучения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Минимум (6 дней)</h4>
                <p className="text-sm text-gray-600">Базовые навыки, экспресс-практика</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">Оптимум (12 дней)</h4>
                <p className="text-sm text-gray-600">Полноценные тренинги, разбор кейсов</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Максимум (18 дней)</h4>
                <p className="text-sm text-gray-600">Расширенная проработка, ролевые игры</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Users" size={24} />
            Модули программы
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Эффективные деловые коммуникации',
              'Эффективные переговоры',
              'Манипуляции и контрманипуляции',
              'Тренинг телефонных переговоров',
              'Управление временем и стрессом',
              'Основы описания и оптимизации бизнес-процессов',
              'Идеальные подчинённые',
              'Большие продажи/Клиентоориентированность',
              'Организация пространства/Самоменеджмент'
            ].map((module, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">{module}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCalculationsSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Финансовые расчёты</h2>
      
      {/* Пилотный проект */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Calculator" size={24} />
            Пилотный проект (15 человек)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Менеджеры среднего звена</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2">Вариант</th>
                      <th className="border border-gray-300 p-2">Затраты (₽)</th>
                      <th className="border border-gray-300 p-2">Экономия (₽/год)</th>
                      <th className="border border-gray-300 p-2">ROI (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pilotCalculations.middle.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2">{row.variant}</td>
                        <td className="border border-gray-300 p-2">{formatNumber(row.cost)}</td>
                        <td className="border border-gray-300 p-2">{formatNumber(row.savings)}</td>
                        <td className="border border-gray-300 p-2 font-bold text-green-600">{row.roi}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Менеджеры высшего звена</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2">Вариант</th>
                      <th className="border border-gray-300 p-2">Затраты (₽)</th>
                      <th className="border border-gray-300 p-2">Экономия (₽/год)</th>
                      <th className="border border-gray-300 p-2">ROI (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pilotCalculations.senior.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2">{row.variant}</td>
                        <td className="border border-gray-300 p-2">{formatNumber(row.cost)}</td>
                        <td className="border border-gray-300 p-2">{formatNumber(row.savings)}</td>
                        <td className="border border-gray-300 p-2 font-bold text-green-600">{row.roi}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Масштабирование */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="TrendingUp" size={24} />
            Масштабирование (1000 человек)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">500 менеджеров среднего звена</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2">Вариант</th>
                      <th className="border border-gray-300 p-2">Тренеры</th>
                      <th className="border border-gray-300 p-2">Затраты (₽)</th>
                      <th className="border border-gray-300 p-2">ROI (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scaleCalculations.middle.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2">{row.variant}</td>
                        <td className="border border-gray-300 p-2">{row.trainers}</td>
                        <td className="border border-gray-300 p-2">{formatNumber(row.cost)}</td>
                        <td className="border border-gray-300 p-2 font-bold text-green-600">{row.roi}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">500 менеджеров высшего звена</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2">Вариант</th>
                      <th className="border border-gray-300 p-2">Тренеры</th>
                      <th className="border border-gray-300 p-2">Затраты (₽)</th>
                      <th className="border border-gray-300 p-2">ROI (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scaleCalculations.senior.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2">{row.variant}</td>
                        <td className="border border-gray-300 p-2">{row.trainers}</td>
                        <td className="border border-gray-300 p-2">{formatNumber(row.cost)}</td>
                        <td className="border border-gray-300 p-2 font-bold text-green-600">{row.roi}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPresentationSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Презентация проекта</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Слайд 1 - Проблема */}
        <Card className="bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700">Проблема коммуникаций</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-red-600">70%</div>
                <div className="text-sm">проектов терпят неудачу</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-red-600">9 трлн ₽</div>
                <div className="text-sm">годовые потери компаний</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Слайд 2 - Решение */}
        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-700">Наше решение</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-green-600">40%</div>
                <div className="text-sm">снижение переделок</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-green-600">30%</div>
                <div className="text-sm">ускорение процессов</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Слайд 3 - Этапы */}
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-700">Этапы внедрения</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm">
              <li>1. Диагностика коммуникаций</li>
              <li>2. Ассесмент и оценка навыков</li>
              <li>3. Обучение (3 варианта глубины)</li>
              <li>4. Внедрение стандартов</li>
            </ol>
          </CardContent>
        </Card>

        {/* Слайд 4 - Модели финансирования */}
        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-700">Модели финансирования</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div><strong>Бюджетные:</strong> внутренний бюджет, программы эффективности</div>
              <div><strong>Внебюджетные:</strong> гранты, субсидии</div>
              <div><strong>Партнёрские:</strong> совместное финансирование</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderROISection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">ROI Анализ</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" size={24} className="text-green-500" />
              Преимущества программы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Снижение переделок:</span>
                <Badge variant="outline" className="text-green-600">40%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Ускорение процессов:</span>
                <Badge variant="outline" className="text-blue-600">30%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Увеличение вовлечённости:</span>
                <Badge variant="outline" className="text-purple-600">20-25%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Снижение конфликтов:</span>
                <Badge variant="outline" className="text-orange-600">10%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Calculator" size={24} className="text-blue-500" />
              Лучшие показатели ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">284%</div>
                <div className="text-sm text-gray-600">Пилот: высшее звено, минимум</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">269%</div>
                <div className="text-sm text-gray-600">Масштаб: высшее звено, минимум</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">249%</div>
                <div className="text-sm text-gray-600">Масштаб: среднее звено, минимум</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ROI График */}
      <Card>
        <CardHeader>
          <CardTitle>Сравнение ROI по программам</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-around bg-gray-50 rounded-lg p-4">
            {[
              { name: 'Пилот\nСредний\nМинимум', value: 263 },
              { name: 'Пилот\nВысший\nМинимум', value: 284 },
              { name: 'Масштаб\nСредний\nМинимум', value: 249 },
              { name: 'Масштаб\nВысший\nМинимум', value: 269 }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="bg-blue-500 rounded-t-md flex items-end justify-center text-white text-sm font-bold"
                  style={{ height: `${item.value / 3}px`, minHeight: '40px', width: '60px' }}
                >
                  {item.value}%
                </div>
                <div className="text-xs mt-2 text-center whitespace-pre-line">{item.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContactsSection = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Контакты</h2>
      
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">Проект для  России</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-blue-500" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">a.88888888@rambler.ru</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-green-500" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-600">+7 (991) 837-55-88</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-red-500" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-600">Россия г. Москва</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Globe" size={20} className="text-purple-500" />
                  <div>
                    <div className="font-semibold">Сайт</div>
                    <div className="text-gray-600">https://kommunikatsiya-proekta--preview.poehali.dev/</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="FileText" size={16} className="mr-2" />
                Скачать презентацию PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'main': return renderMainSection();
      case 'project': return renderProjectSection();
      case 'calculations': return renderCalculationsSection();
      case 'presentation': return renderPresentationSection();
      case 'roi': return renderROISection();
      case 'contacts': return renderContactsSection();
      default: return renderMainSection();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Проект "Архитектура принятия решений"</div>
            <nav className="flex space-x-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2"
                >
                  <Icon name={item.icon} size={16} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;