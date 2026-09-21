window.CARDS=[
{section:"Теория тестирования",q:"Какие цели тестирования вы преследуете?",a:"Цель — дать информацию о качестве и рисках продукта: найти дефекты до пользователя, проверить соответствие требованиям, снизить риск регрессии и дать команде основание для решения о релизе. На интервью полезно связать ответ с реальным проектом.",must:1,pdf:1},
{section:"Теория тестирования",q:"Какие виды тестирования знаете и какие применяли?",a:"Можно классифицировать по уровню (unit, integration, system, acceptance), цели (functional/non-functional), моменту (smoke, regression, retest) и способу (manual/automation). Для вакансии POS отдельно упомяните smoke, интеграционное, приемочное и регрессионное тестирование кассового стенда.",must:1,pdf:1},
{section:"Теория тестирования",q:"Какие техники тест-дизайна знаете?",a:"Эквивалентное разбиение, анализ граничных значений, таблицы решений, переходы состояний, pairwise, use-case testing, error guessing. Хороший ответ включает 1–2 примера: например сумма чека 0/1/максимум и комбинации тип оплаты × скидка × возврат.",must:1,pdf:1},
{section:"Теория тестирования",q:"Назовите принципы тестирования.",a:"Классические идеи: тестирование показывает наличие дефектов, исчерпывающее тестирование невозможно, раннее тестирование выгоднее, дефекты кластеризуются, тесты устаревают, подход зависит от контекста, отсутствие найденных дефектов не доказывает пригодность продукта.",pdf:1},
{section:"Теория тестирования",q:"Опишите жизненный цикл дефекта.",a:"Обычно New/Open → Assigned/In progress → Fixed/Resolved → Retest → Closed. Возможны Reopened, Rejected/Not a bug, Duplicate, Deferred. Реальный workflow зависит от Jira-проекта.",must:1,pdf:1},
{section:"Теория тестирования",q:"Из чего состоит хороший тест-кейс?",a:"ID/название, предусловия, тестовые данные, шаги, ожидаемый результат, при необходимости постусловия и приоритет. Шаги должны быть воспроизводимыми, а ожидаемый результат — проверяемым.",pdf:1},
{section:"Теория тестирования",q:"Чем smoke отличается от regression и retest?",a:"Smoke быстро отвечает «сборка вообще пригодна для дальнейшего тестирования?». Regression проверяет, что изменения не сломали существующее поведение. Retest адресно подтверждает исправление конкретного дефекта.",must:1},
{section:"Теория тестирования",q:"Как декомпозировать требование в user story и проверки?",a:"Выделить акторов, бизнес-цель, основной поток, альтернативы и ограничения; сформулировать acceptance criteria; затем разложить проверки на positive/negative, границы, состояния, интеграции, права, ошибки оборудования и восстановление после сбоев.",must:1},

{section:"Java / OOP",q:"Назовите четыре принципа ООП и приведите примеры.",a:"Инкапсуляция — скрытие состояния через API класса; наследование — специализация общего поведения; полиморфизм — единый контракт с разными реализациями; абстракция — выделение существенного через интерфейсы/абстрактные классы.",must:1,pdf:1},
{section:"Java / OOP",q:"Что делает ключевое слово super?",a:"Обращается к членам суперкласса и вызывает его конструктор. Вызов super(...) в конструкторе должен быть первым оператором; если его нет, компилятор пытается вставить super().",must:1,pdf:1},
{section:"Java / OOP",q:"Что делает instanceof?",a:"Проверяет, совместим ли объект во время выполнения с указанным типом. Современная Java поддерживает pattern matching: if (x instanceof String s) {...}. Для null результат false.",pdf:1},
{section:"Java / OOP",q:"SOLID, DRY, KISS — что это?",a:"SOLID — набор принципов проектирования классов; DRY — не дублировать знание/логику; KISS — выбирать простое достаточное решение. В автотестах это проявляется в Page/Object-компонентах, переиспользуемых клиентах API и ясных fixture-ах.",pdf:1},
{section:"Java / OOP",q:"Интерфейс vs абстрактный класс?",a:"Интерфейс задает контракт и поддерживает множественную реализацию; может иметь default/static/private методы. Абстрактный класс может хранить состояние, конструкторы и общую реализацию, но наследование класса одиночное.",must:1,pdf:1},
{section:"Java / OOP",q:"Могут ли интерфейсы содержать методы с реализацией?",a:"Да: default и static, а также private helper-методы в современных версиях Java. Абстрактные методы реализации не имеют.",pdf:1},
{section:"Java / OOP",q:"Что такое абстрактный класс?",a:"Класс, который нельзя инстанцировать напрямую. Может содержать поля, конструкторы, обычные и абстрактные методы и служит общей базой для связанных реализаций.",pdf:1},

{section:"JUnit / TestNG",q:"JUnit 4 и JUnit 5: ключевые различия?",a:"JUnit 5 — платформа Jupiter с расширяемой моделью extension, richer parameterized tests, nested/dynamic tests. Аннотации lifecycle: @BeforeEach/@AfterEach вместо @Before/@After, @BeforeAll/@AfterAll вместо @BeforeClass/@AfterClass.",must:1,pdf:1},
{section:"JUnit / TestNG",q:"Назовите основные аннотации JUnit 5.",a:"@Test, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll, @ParameterizedTest, @ValueSource/@CsvSource/@MethodSource, @Nested, @Tag, @Disabled.",must:1,pdf:1},
{section:"JUnit / TestNG",q:"Как сделать параметризованный тест в JUnit 5?",a:"Использовать @ParameterizedTest вместе с источником данных, например @ValueSource, @CsvSource или @MethodSource. Это уменьшает дублирование сценариев на разных наборах данных.",pdf:1},
{section:"JUnit / TestNG",q:"TestNG: какие основные аннотации?",a:"@Test, @BeforeMethod/@AfterMethod, @BeforeClass/@AfterClass, @BeforeSuite/@AfterSuite, @DataProvider, @Parameters. Groups позволяют собирать smoke/regression профили.",pdf:1},
{section:"JUnit / TestNG",q:"Как запускать тесты по профилям/группам?",a:"В JUnit обычно применяют @Tag и фильтрацию в Maven/Gradle; в TestNG — groups и suite XML. В CI это связывают с параметрами pipeline: smoke на каждый PR, regression по расписанию.",pdf:1},
{section:"JUnit / TestNG",q:"Что проверяют assertions и чем assertAll полезен?",a:"Assertions сравнивают фактическое и ожидаемое состояние. assertAll выполняет группу проверок и сообщает все накопленные расхождения, вместо остановки на первой.",must:1},

{section:"API / Rest-Assured",q:"Какие инструменты использовали для ручного тестирования API?",a:"Для этой вакансии ожидаемая база — Postman/аналог, curl, Swagger/OpenAPI. В ответе назовите, как проверяли методы, headers, auth, body, status, schema и негативные сценарии.",must:1,pdf:1},
{section:"API / Rest-Assured",q:"Из чего состоит HTTP-запрос?",a:"Метод + URL (scheme/host/path/query), headers, опционально body. Важны Content-Type/Accept, Authorization, cookies. Ответ содержит status code, headers и body.",must:1,pdf:1},
{section:"API / Rest-Assured",q:"Какие HTTP-методы нужно знать?",a:"GET — чтение; POST — создание/команда; PUT — полная замена; PATCH — частичное изменение; DELETE — удаление. Семантика зависит от API-контракта; GET/PUT/DELETE обычно рассматривают как идемпотентные.",must:1,pdf:1},
{section:"API / Rest-Assured",q:"Как выглядит given / when / then в Rest-Assured?",a:"given() — подготовка запроса (base URI, headers, auth, body); when() — отправка действия, например get/post; then() — проверки status/body/headers. Пример: given().contentType(JSON).body(dto).when().post('/sale').then().statusCode(201).",must:1,pdf:1},
{section:"API / Rest-Assured",q:"Что автоматизировать в Postman?",a:"Переменные окружений, auth/token flow, pre-request scripts, post-response tests, цепочки запросов, schema/business assertions и запуск collection в CI через CLI/Newman-подобный runner.",must:1},

{section:"Selenium ecosystem",q:"Что такое Selenium?",a:"Набор инструментов для автоматизации веб-браузеров. Selenium WebDriver управляет браузером через стандартизированный WebDriver protocol. Для нативного desktop GUI Selenium сам по себе не является правильным инструментом.",must:1,pdf:1},
{section:"Selenium ecosystem",q:"Какие локаторы знаете?",a:"id, name, className, tagName, linkText/partialLinkText, CSS selector, XPath. В реальном проекте предпочтительны стабильные уникальные атрибуты (data-testid и аналоги), а не хрупкие XPath по структуре DOM.",must:1,pdf:1},
{section:"Selenium ecosystem",q:"Что такое WebDriver?",a:"API/модель управления браузером: открыть страницу, найти элемент, выполнить действие, прочитать состояние. Драйвер взаимодействует с браузером по WebDriver protocol.",must:1,pdf:1},
{section:"Selenium ecosystem",q:"Selenide vs Selenium?",a:"Selenide — высокоуровневая Java-обертка над Selenium: лаконичные элементы/условия, встроенные ожидания, автоматический lifecycle драйвера и удобные диагностика/скриншоты. Selenium — более низкоуровневый фундамент.",pdf:1},
{section:"Selenium ecosystem",q:"Для чего нужен Selenoid?",a:"Для удаленного запуска браузеров в контейнерах и параллелизации UI-тестов; часто используется как более легкая альтернатива классическому Selenium Grid. В новых проектах конкретный выбор зависит от инфраструктуры.",pdf:1},
{section:"Selenium ecosystem",q:"Implicit wait vs explicit wait?",a:"Implicit wait глобально влияет на поиск элементов; explicit wait ожидает конкретное условие. Для управляемых тестов обычно предпочитают explicit/condition-based waits и избегают Thread.sleep().",must:1},
{section:"Selenium ecosystem",q:"Почему UI-тесты flaky?",a:"Гонки по времени, нестабильные локаторы, анимации, асинхронность, сеть, общий state, тестовые данные, окружение. Лечение: condition waits, изоляция данных, устойчивые селекторы, идемпотентный setup, артефакты диагностики.",must:1},
{section:"Selenium ecosystem",q:"Что такое Allure и какие данные туда полезно писать?",a:"Система отчетности по автотестам. Полезны шаги, severity, owner, ссылки на issue/test case, attachments (логи, screenshots, request/response). Отчет генерируется из результатов запуска и публикуется локально или в CI.",pdf:1},

{section:"CI/CD / Maven",q:"Что такое CI, Continuous Delivery и Continuous Deployment?",a:"CI — частая интеграция с автоматической сборкой/тестами. Delivery — код постоянно готов к релизу, но production deploy может быть ручным. Deployment — успешные изменения автоматически уходят в production.",must:1,pdf:1},
{section:"CI/CD / Maven",q:"Какие фазы Maven lifecycle знаете?",a:"В default lifecycle часто спрашивают validate, compile, test, package, verify, install, deploy. Есть также clean и site lifecycles.",must:1,pdf:1},
{section:"CI/CD / Maven",q:"Что означают Maven ключи -D, -P, -pl?",a:"-D задает system/project property, -P активирует profile, -pl выбирает проекты/модули в multi-module build. Также полезны -am (also make dependencies), -q, -X.",pdf:1},
{section:"CI/CD / Maven",q:"Что находится в pom.xml?",a:"Coordinates проекта, packaging, properties, dependencies, dependencyManagement, build/plugins, profiles, modules, repositories и metadata. POM описывает модель сборки Maven.",must:1,pdf:1},
{section:"CI/CD / Maven",q:"dependencies vs dependencyManagement?",a:"dependencies реально добавляет зависимости модулю. dependencyManagement централизует версии/настройки зависимостей, но сам по себе обычно не подключает dependency в classpath дочернего модуля.",must:1,pdf:1},
{section:"CI/CD / Maven",q:"Как искать конфликт зависимостей Maven?",a:"Посмотреть mvn dependency:tree, определить транзитивные версии и mediation, затем выровнять через dependencyManagement/BOM или exclusions. Важно не маскировать несовместимость случайным override.",pdf:1},
{section:"CI/CD / Maven",q:"Что такое многомодульный Maven-проект?",a:"Aggregator POM перечисляет modules; parent POM может централизовать properties/plugins/dependencyManagement. Модули собираются в reactor с учетом зависимостей.",pdf:1},

{section:"SQL",q:"Какие виды БД знаете?",a:"Реляционные (PostgreSQL/MySQL/MSSQL/SQLite), key-value, document, column-family, graph, time-series. Для QA важно понимать модель данных конкретного продукта и уметь проверить состояние до/после операции.",pdf:1},
{section:"SQL",q:"Приведите простой SQL-запрос для проверки продажи.",a:"Например: SELECT id,total,status FROM sales WHERE receipt_no='12345' ORDER BY created_at DESC; Затем сверить сумму/статус с UI или API.",must:1,pdf:1},
{section:"SQL",q:"Для чего LIKE, ORDER BY, AND, OR, AS?",a:"LIKE — pattern matching; ORDER BY — сортировка; AND/OR — логические условия; AS — alias для колонки/таблицы. Важно помнить о приоритете AND перед OR и ставить скобки для ясности.",pdf:1},
{section:"SQL",q:"Какие JOIN знаете?",a:"INNER JOIN — совпавшие строки; LEFT/RIGHT — все строки одной стороны + совпадения; FULL — обе стороны; CROSS — декартово произведение. Для интервью достаточно уверенно объяснить INNER и LEFT на примере sale ↔ payment.",must:1,pdf:1},
{section:"SQL",q:"WHERE vs HAVING?",a:"WHERE фильтрует строки до группировки, HAVING — группы после GROUP BY. Например найти кассы с COUNT(*) > 10 после группировки.",level:"deep"},
{section:"SQL",q:"Как найти дубликаты по ключу?",a:"SELECT key_col, COUNT(*) FROM t GROUP BY key_col HAVING COUNT(*) > 1; Затем отдельно исследовать строки с найденными ключами.",must:1},

{section:"Java Core",q:"Какие две группы типов данных в Java?",a:"Primitive и reference. Примитивы: byte, short, int, long, float, double, char, boolean. Ссылочные: классы (включая String), массивы, интерфейсы, enum и т.д.",must:1,pdf:1},
{section:"Java Core",q:"Почему String и массив — ссылочные типы?",a:"Их значения — объекты в heap, а переменная хранит ссылку на объект (упрощенно). Массив наследует Object; String — final class с собственными методами и immutable semantics.",pdf:1},
{section:"Java Core",q:"Какие модификаторы доступа существуют?",a:"private — только класс; package-private (без модификатора) — пакет; protected — пакет + наследники с нюансами доступа; public — везде при доступности типа.",must:1,pdf:1},
{section:"Java Core",q:"static, final, void — что означают?",a:"static привязывает член к классу; final запрещает повторное присваивание переменной/override метода/наследование класса; void означает отсутствие возвращаемого значения у метода.",pdf:1},
{section:"Java Core",q:"for vs while vs do-while?",a:"for удобен когда есть инициализация/условие/шаг или итерация; while проверяет условие до тела; do-while гарантирует минимум одно выполнение, так как проверка после тела.",pdf:1},
{section:"Java Core",q:"Что такое enum и может ли он иметь поле description?",a:"Да. enum — класс с фиксированным набором экземпляров; можно объявить constructor и поля: SUNDAY('Воскресенье'), затем private final String description; EnumType(String description){...}.",pdf:1},
{section:"Java Core",q:"Какие исключения знаете и как устроена иерархия?",a:"Throwable → Error и Exception; RuntimeException — unchecked. Checked exceptions требуют catch или throws. Важно различать программные ошибки, ожидаемые ошибки домена и системные сбои.",must:1,pdf:1},
{section:"Java Core",q:"try-with-resources — зачем?",a:"Автоматически закрывает AutoCloseable ресурсы даже при exception и корректно обрабатывает suppressed exceptions. Предпочтительнее ручного finally для файлов/streams/connections.",must:1,pdf:1},
{section:"Java Core",q:"Что такое generics?",a:"Параметризация типов с compile-time type safety: List<String>, Box<T>. Убирает необходимость небезопасных cast и позволяет писать переиспользуемые API.",must:1,pdf:1},
{section:"Java Core",q:"Чем отличаются ArrayList list, List list и List<String> list?",a:"Первые два — raw types без generic type safety; второй дополнительно программирует на интерфейс List. List<String> — предпочтительный вариант: интерфейс + проверяемый тип элементов.",must:1,pdf:1},
{section:"Java Core",q:"Инвариантность, ковариантность и контравариантность в generics?",a:"List<Integer> не subtype List<Number> — generics инвариантны. ? extends T дает ковариантное чтение (producer), ? super T — контравариантную запись (consumer). Mnemonic: PECS.",level:"deep",pdf:1},
{section:"Java Core",q:"Как устроено lambda expression?",a:"(parameters) -> expression или (parameters) -> { statements }. Lambda реализует functional interface — интерфейс с одним abstract method (SAM).",pdf:1},
{section:"Java Core",q:"Stream API: какие две группы операций?",a:"Intermediate (map, filter, sorted, distinct, peek) возвращают stream и ленивы; terminal (collect/toList, forEach, reduce, count, anyMatch) запускают pipeline.",must:1,pdf:1},
{section:"Java Core",q:"Как получить stream из List<String>?",a:"list.stream() для последовательного stream; list.parallelStream() — параллельный, но его не стоит применять автоматически без оценки нагрузки и thread-safety.",pdf:1},
{section:"Java Core",q:"Сериализация и десериализация — что это?",a:"Преобразование объекта в переносимое представление и обратно. На практике в автотестах чаще JSON ↔ DTO через Jackson/Gson, а не Java native serialization.",pdf:1},
{section:"Java Core",q:"Что такое reflection?",a:"Runtime API для исследования/вызова типов, полей, методов и аннотаций. Используется фреймворками, но повышает связность с runtime-структурой и может ухудшать безопасность/поддерживаемость.",pdf:1},
{section:"Java Core",q:"Что такое рекурсия?",a:"Метод вызывает сам себя до base case. Полезна для рекурсивных структур, но при большой глубине может привести к StackOverflowError; часто итерация проще.",pdf:1},
{section:"Java Core",q:"Какие виды ссылок есть в java.lang.ref?",a:"Strong (обычная ссылка), SoftReference, WeakReference, PhantomReference. На интервью важно понимать: weak может быть собрана GC при отсутствии strong refs; phantom используют для post-mortem cleanup/наблюдения.",level:"deep",pdf:1},
{section:"Java Core",q:"Что делает Garbage Collector?",a:"Автоматически освобождает heap от объектов, которые больше недостижимы из GC roots. Не гарантирует немедленное освобождение и не заменяет закрытие внешних ресурсов.",must:1,pdf:1},
{section:"Java Core",q:"Stateless vs Immutable?",a:"Immutable object после создания не меняет наблюдаемое состояние. Stateless component не хранит состояние между вызовами. Объект может быть immutable, но хранить состояние; сервис может быть stateless и при этом не являться value object.",pdf:1},
{section:"Java Core",q:"Назовите основные коллекции.",a:"Collection → List (ArrayList, LinkedList), Set (HashSet, LinkedHashSet, TreeSet), Queue/Deque (ArrayDeque, PriorityQueue). Map (HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap) — отдельная иерархия, не подтип Collection.",must:1,pdf:1},
{section:"Java Core",q:"Map является Collection?",a:"Нет, java.util.Map не наследует java.util.Collection. Но map предоставляет views keySet(), values(), entrySet().",must:1,pdf:1},
{section:"Java Core",q:"ArrayList vs LinkedList?",a:"ArrayList дает быстрый random access и обычно лучше по locality; вставка в середину требует сдвига. LinkedList имеет узлы и O(1) link/unlink при уже найденной позиции, но поиск O(n) и больше overhead. На практике ArrayList чаще предпочтителен.",must:1,pdf:1},
{section:"Java Core",q:"List vs Set?",a:"List сохраняет последовательность и допускает дубликаты; Set моделирует уникальность элементов. Конкретный порядок зависит от реализации (HashSet не гарантирует, LinkedHashSet insertion order, TreeSet sorted).",must:1,pdf:1},
{section:"Java Core",q:"Какие паттерны проектирования полезны в автотестах?",a:"Page Object/Component Object, Factory, Builder, Strategy, Adapter, Facade. Важно объяснить проблему, которую паттерн решает, а не перечислять названия.",pdf:1},
{section:"Java Core",q:"Как работает HashMap на высоком уровне?",a:"hash ключа определяет bucket; внутри bucket ключи различаются через equals. При коллизиях хранятся несколько entries; в современных JDK длинные цепочки при условиях могут treeify. Корректный контракт equals/hashCode критичен.",must:1},
{section:"Java Core",q:"== vs equals()?",a:"Для primitive == сравнивает значения; для reference == сравнивает ссылки. equals() — логическое равенство согласно реализации класса. Если переопределяете equals, согласуйте hashCode.",must:1},
{section:"Java Core",q:"Что такое immutable object и как его сделать?",a:"Состояние не меняется после construction: final class или контроль наследования, private final fields, отсутствие setters, defensive copies mutable данных. String — классический пример.",must:1},
{section:"Java Core",q:"synchronized vs volatile?",a:"volatile гарантирует visibility/ordering для чтения-записи одной переменной, но не делает составные операции атомарными. synchronized дает mutual exclusion + happens-before для критической секции.",must:1,level:"deep"},
{section:"Java Core",q:"Что такое race condition и deadlock?",a:"Race — результат зависит от недетерминированного interleaving потоков. Deadlock — циклическое ожидание ресурсов. Диагностика: thread dumps, lock ordering, минимизация shared mutable state.",must:1,level:"deep"},
{section:"Архитектура",q:"Что такое микросервисная архитектура и зачем?",a:"Система из независимо развиваемых/развертываемых сервисов вокруг бизнес-возможностей. Плюсы — автономность и масштабирование; цена — сеть, observability, data consistency, deployment complexity и контрактное тестирование.",pdf:1}
];
window.PRACTICE=[
{title:"Мини-практика 1 — порядок инициализации полей",src:"Java-шаблон, стр. 4",code:`class SomeClass {
  int getX() { return x; }
  int y = getX();
  int x = 3;

  void test1() {
    SomeClass s = new SomeClass();
    System.out.println(s.x + "," + s.y);
  }
}`,options:["3,3","0,0","0,3","3,0","Ошибка компиляции","Ошибка выполнения"],answer:"3,0",why:"Сначала все instance fields получают default 0. Затем явные инициализаторы выполняются сверху вниз: y=getX() видит x=0; после этого x становится 3. Разбор добавлен как учебное пояснение по семантике Java; PDF содержит вопрос и варианты, но не дает отдельного официального ключа."},
{title:"Мини-практика 2 — метод, похожий на конструктор",src:"Java-шаблон, стр. 4–5",code:`class SomeClass {
  int a, b;
  void Box(int a, int b) {
    this.a = a;
    this.b = b;
  }
}
class MyClass extends SomeClass {
  MyClass() {
    super(1, 2);
    System.out.println(a + "," + b);
  }
}`,options:["Напечатает 1,2","Напечатает 0,0","Не скомпилируется из-за объявления main","Ничего из вышеперечисленного"],answer:"Ничего из вышеперечисленного (код не компилируется)",why:"void Box(...) — обычный метод, не constructor. У SomeClass есть только implicit no-arg constructor, поэтому super(1,2) не находит подходящего конструктора. Формулировка про main из вариантов неверна."},
{title:"Мини-практика 3 — private метод и полиморфизм",src:"Java-шаблон, стр. 4–5",code:`class SomeClass {
  private void print() { System.out.println(111); }
  void print(SomeClass someClass) { someClass.print(); }
}
class TestClass extends SomeClass {
  void print() { System.out.println(222); }
  public static void main(String[] args) {
    SomeClass s = new SomeClass();
    TestClass t = new TestClass();
    s.print(t);
  }
}`,options:["111","222","Ошибка компиляции","Ничего из вышеперечисленного"],answer:"111",why:"private method SomeClass.print() не override-ится в TestClass. Внутри SomeClass вызов someClass.print() разрешается к private методу самого SomeClass, поэтому выводится 111."}
];