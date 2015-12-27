'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.routes',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate'
])
    .controller('HomeCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-3';

        $scope.buttons = [
            {
                organisation: 'Benefits',
                web_address: '/#/benefits',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Information on claiming benefits'
            },
            {
                organisation: 'Work',
                web_address: '/#/work',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Work and Employment'
            },
            {
                organisation: 'Debt',
                web_address: '/#/debt',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Help dealing with debt'
            },
            {
                organisation: 'Consumer',
                web_address: '/#/consumer',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Consumer Issues and Complaints'
            },
            {
                organisation: 'Relationships',
                web_address: '/#/relationships',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Family and relationship issues'
            },
            {
                organisation: 'Housing',
                web_address: '/#/housing',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Housing and homelessness'
            },
            {
                organisation: 'Law and Rights',
                web_address: '/#/law',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Legal and rights issues'
            },
            {
                organisation: 'Discrimination',
                web_address: '/#/discrimination',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Unfair discrimination issues'
            },
            {
                organisation: 'Tax',
                web_address: '/#/tax',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Issues with taxation'
            },
            {
                organisation: 'Healthcare',
                web_address: '/#/healthcare',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Physical and mental health issues'
            },
            {
                organisation: 'Education',
                web_address: '/#/education',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Education and training'
            },
            {
                organisation: 'Local Organisations',
                web_address: '/#/local',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Local organisations who offer advice'
            }
        ]
    })
    .controller('BenefitsCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/benefits/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'Turn 2 Us',
                web_address: 'https://www.turn2us.org.uk/Your-Situation',
                telephone: 'noTelephone',//'08088022000',
                details: 'Detailed benefits information'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/browse/benefits',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government benefits guide'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/money-matters/claiming-benefits/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Benefits advice for older people'
            },
            {
                organisation: 'HM Revenue & Customs',
                web_address: 'http://www.hmrc.gov.uk',
                telephone: 'noTelephone',//'03002003300',
                details: 'Tax and benefits information'
            }
        ]
    })
    .controller('WorkCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/work/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/browse/working',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government Working Guide'
            },
            {
                organisation: 'Pension Service',
                web_address: 'http://www.gov.uk/contact-pension-service',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government Pensions Advice Service'
            },
            {
                organisation: 'ACAS',
                web_address: 'http://www.acas.org.uk/index.aspx?articleid_1461',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Employment relations advice'
            },
            {
                organisation: 'Tribunal Service',
                web_address: 'http://www.acas.org.uk/index.aspx?articleid_1461',
                telephone: 'noTelephone',//'03001231100',
                details: 'Employment tribunals'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/work-and-learning/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Employment advice for older people'
            },
            {
                organisation: 'National Careers Service',
                web_address: 'https://nationalcareersservice.direct.gov.uk/Pages/Home.aspx',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Help and Advice with Careers'
            }
        ]
    })
    .controller('DebtCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/debt-and-money/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'StepChange',
                web_address: 'https://www.stepchange.org',
                telephone: 'noTelephone',//'08001381111',
                details: 'Advice on getting out of debt'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/government/organisations/insolvency-service',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government Insolvency Service'
            },
            {
                organisation: 'Money Advice Service',
                web_address: 'http://www.moneyadviceservice.org.uk',
                telephone: 'noTelephone',//'03005005000',
                details: 'The UK Money Advice Service'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/money-matters/money-management/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Debt advice for older people'
            },
            {
                organisation: 'National Debtline',
                web_address: 'https://www.nationaldebtline.org/EW/Pages/default.aspx',
                telephone: 'noTelephone',//'08088084000',
                details: 'Help with managing debt and money'
            }
        ]
    })
    .controller('ConsumerCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/consumer/',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/consumer-protection-rights/',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government consumer rights guide'
            },
            {
                organisation: 'Complaints Commission',
                web_address: 'http://www.ukecc.net',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The European Complaints Commission'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/money-matters/consumer-advice/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Consumer advice for older people'
            },
            {
                organisation: 'Financial Ombudsman',
                web_address: 'http://www.financial-ombudsman.org.uk',
                telephone: 'noTelephone',//'08000234567',
                details: 'The Government consumer rights guide'
            }
        ]
    })
    .controller('RelationshipsCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/relationships/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/child-maintenance',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government Child Maintenance Guide'
            },
            {
                organisation: 'Family Mediation Council',
                web_address: 'http://www.familymediationcouncil.org.uk/family-mediation/choose-family-mediation/',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Mediation services'
            },
            {
                organisation: 'Relate',
                web_address: 'https://www.relate.org.uk',
                telephone: 'noTelephone',//'03001001234',
                details: 'Counselling, support and mediation service'
            },
            {
                organisation: 'Childline',
                web_address: 'http://www.childline.org.uk/explore/Pages/Explore.aspx',
                telephone: 'noTelephone',//'08001111',
                details: 'Counselling, support and mediation service'
            },
            {
                organisation: 'Rasasc',
                web_address: 'http://www.rasasc.org/advice-guides/',
                telephone: 'noTelephone',//'08000288022',
                details: 'Advice and information relating to Rape and Sexual Abuse'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/health-wellbeing/relationships-and-family/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Relationship advice for older people'
            },
            {
                organisation: "Women's Aid",
                web_address: 'http://www.womensaid.org.uk/domestic_violence_topic.asp?section=0001000100220041&sectionTitle=Domestic+violence+%28general%29',
                telephone: 'noTelephone',//'08082000247',
                details: 'Advice and assistance with domestic abuse'
            }
        ]
    })
    .controller('HousingCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/housing/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'Step by Step',
                web_address: 'http://www.stepbystep.org.uk',
                telephone: 'noTelephone',//'01252346105',
                details: 'Advice on homelessness for young people'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/browse/housing/owning-renting-property',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government Housing Guide'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/home-and-care/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Housing advice for older people'
            },
            {
                organisation: 'Shelter',
                web_address: 'http://england.shelter.org.uk/get_advice',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Advice on homelessness in England'
            }

        ]
    })
    .controller('LawCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/law-and-rights/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'https://www.gov.uk/browse/justice',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Government Justice Guide'
            },
            {
                organisation: 'Gov.UK Immigration',
                web_address: 'https://www.gov.uk/visa-immigration',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Immigration and Residency Law Guide'
            },
            {
                organisation: 'CLS Direct Legal Service',
                web_address: 'http://www.clsdirect.org.uk/',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Legal advice and legal aid'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/money-matters/legal-issues/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Legal advice for older people'
            },
            {
                organisation: 'Power of Attorney',
                web_address: 'http://www.justice.gov.uk/about/opg',
                telephone: 'noTelephone',//'noTelephone',
                details: 'Advice on Powers of Attorney'
            }
        ]
    })
    .controller('DiscriminationCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/work-and-learning/discrimination-and-rights/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Discrimination advice for older people'
            },
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/discrimination/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            }
        ]
    })
    .controller('TaxCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/tax/',
                telephone: 'noTelephone',//'03448487969',
                details: 'Citizens Advice information site'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/browse/tax',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The Government taxation guide'
            },
            {
                organisation: 'HM Revenue & Customs',
                web_address: 'http://www.hmrc.gov.uk',
                telephone: 'noTelephone',//'03002003300',
                details: 'Tax and benefits information'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk/money-matters/income-and-tax/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Tax advice for older people'
            },
            {
                organisation: 'TaxAid',
                web_address: 'http://www.taxaid.org.uk',
                telephone: 'noTelephone',//'03451203779',
                details: 'If HMRC cannot help with a tax issue'
            }
        ]
    })
    .controller('HealthcareCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/healthcare/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'NHS Choices',
                web_address: 'https://www.nhs.uk/',
                telephone: 'noTelephone',//'noTelephone',
                details: 'The National Health Service'
            },
            {
                organisation: 'Healthwatch',
                web_address: 'http://www.healthwatch.co.uk',
                telephone: 'noTelephone',//'03000683000',
                details: 'The Health Service Watchdog'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk',
                telephone: 'noTelephone',//'08001696565',
                details: 'Health and advice for older people'
            },
            {
                organisation: 'Mind',
                web_address: 'http://www.mind.org.uk',
                telephone: 'noTelephone',//'03001233393',
                details: 'Advice and assistance with mental health issues'
            },
            {
                organisation: 'Age UK',
                web_address: 'http://www.ageuk.org.uk',
                telephone: 'noTelephone',//'08001696565',
                details: 'Health and advice for older people'
            },
            {
                organisation: 'NHS Sexual Health',
                web_address: 'http://www.letstalkaboutit.nhs.uk',
                telephone: 'noTelephone',
                details: 'NHS advice on sexual health issues'
            }
        ]
    })
    .controller('EducationCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';

        $scope.buttons = [
            {
                organisation: 'Citizens Advice',
                web_address: 'https://www.citizensadvice.org.uk/education/',
                telephone: 'noTelephone',//'03448487969',
                details: 'The Citizens Advice information site'
            },
            {
                organisation: 'Gov.UK',
                web_address: 'http://www.gov.uk/browse/education',
                telephone: 'noTelephone',
                details: 'The Government Education Guide'
            },
            {
                organisation: 'Age UK',
                web_address: 'http:// www.ageuk.org.uk/work-and-learning/further-education-and-training/',
                telephone: 'noTelephone',//'08001696565',
                details: 'Education advice for older people'
            },
            {
                organisation: 'Education Otherwise',
                web_address: 'http://www.education-otherwise.net',
                telephone: 'noTelephone',//'08454786345',
                details: 'Home Schooling Advice'
            },
            {
                organisation: 'NUS',
                web_address: 'http://www.nus.org.uk',
                telephone: 'noTelephone',//'01625413200',
                details: 'National Union of Students'
            },
            {
                organisation: 'IPSEA',
                web_address: 'http://www.ipsea.org.uk',
                telephone: 'noTelephone',//'08000184016',
                details: 'Special Educational Needs Assistance'
            },
            {
                organisation: 'ACE Education',
                web_address: 'http://www.ace-ed.org.uk',
                telephone: 'noTelephone',//'02088883377',
                details: 'Help with choice of schools'
            }
        ]
    })
    .controller('LocalCtrl', function ($scope) {
        $scope.buttonwidth = 'col-xs-4';
        
        $scope.buttons = [
            {
                organisation: 'Guildford Advice Services',
                web_address: 'http://www.communitywalk.com/guildford_advice_services/map/1812722',
                telephone: 'noTelephone',
                details: 'Map of local services'
            },
            {
                organisation: 'Guildford Dragon',
                web_address: 'http://www.guildford-dragon.com/get-advice-in-guildford/',
                telephone: 'noTelephone',
                details: 'Get Advice in Guildford'
            }
        ]
    });
