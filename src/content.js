export const contexts = [
  {
    id: "economic",
    title: "Economic Contexts",
    icon: "Wallet",
    understanding: {
      description: "Economic contexts describe living in poverty, financial difficulty, and housing instability that impact children and families. Family economic disadvantage is on the rise in Australia due to rising living costs, lack of secure employment, and access to affordable housing (Grace & Baird, 2022). These circumstances pose obstacles to accessing basic resources like education, healthcare, and secure living conditions.",
      relevance: "Economic disadvantage directly affects access to learning opportunities and involvement in early childhood services. Low-income children face obstacles like low access to educational materials, low attendance, and fewer enrichment experiences, impacting early learning outcomes.",
      theories: [
        { name: "Ecological Systems Theory (Bronfenbrenner)", detail: "Economic hardship impacts the microsystem (family environment) and exosystem (parental employment and housing), affecting development (Moore et al., 2015)." },
        { name: "Social Determinants of Health", detail: "Emphasis on socioeconomic status affecting health, wellbeing, and educational achievement. Lifetime consequences include achievement, employment, and health (Duncan et al., 2013)." }
      ],
      diversity: "Economic disadvantage is disproportionately found among single-parent families, culturally diverse communities, and those in regional or remote areas. Teachers must be aware of varying family situations and react accordingly (Camberis & McMahon, 2017)."
    },
    impact: {
      development: "Poverty adversely effects cognitive, social, and emotional development. Limited access to books and healthy foods thwarts learning. Unstable living causes toxic stress, impacting brain development (National Scientific Council on the Developing Child, 2020).",
      learning: "Decreased learning activities, poor focus, and delayed language/communication development. This affects school preparedness and future achievement.",
      family: "Economic stress leads to stressful home environments and lack of emotional availability. Housing instability or homelessness contributes to the disruption of family routines (AIHW, 2022).",
      services: "Early childhood services may note behavioural difficulties, inconsistent attendance, and high-needs provision. Educators should embrace inclusive, responsive, and supportive practices to provide equity."
    },
    policy: {
      frameworks: [
        "Early Years Learning Framework (EYLF) - fosters equity, inclusion, and diversity respect.",
        "National Quality Framework (NQF) - ensures high-quality education and care.",
        "Child Care Subsidy (CCS) - decreases financial obstacles."
      ],
      statistics: "The AIHW (2022) data points to a rising number of families using homelessness services, indicating housing stress and financial strain in Australia.",
      evaluation: "While EYLF and NQF promote inclusive practice, studies show policy measures have not brought about significant social changes, meaning more targeted assistance is needed (Grace & Baird, 2022). Educators need to think critically and be ready to help (Woodrow et al., 2022)."
    },
    strategies: [
      { title: "Developing safe and trust relationships", detail: "Good relationships give children a feeling of safety and belonging fundamental to development (National Scientific Council on the Developing Child, 2020)." },
      { title: "Adopting inclusive and flexible practices", detail: "Tailoring the educational process to ensure children can participate despite financial constraints." },
      { title: "Applying trauma-informed approaches", detail: "Awareness of stress and adversity effects enables teachers to act responsively to children's needs." },
      { title: "Strengthening family partnerships", detail: "Open communication helps educators understand family situations and provide better assistance." },
      { title: "Linking families to service provision", detail: "Referral to community resources like financial counselling or housing can enhance wellbeing (Woodrow et al., 2022)." }
    ],
    partnerships: [
      { name: "Social workers", role: "Provide family support and advocacy." },
      { name: "Financial counsellors", role: "Help families in budgeting and financial planning." },
      { name: "Community health services", role: "Take care of physical and mental health." },
      { name: "Non-government organisations (e.g., The Smith Family)", role: "Offer educational assistance." },
      { name: "Housing and homelessness services", role: "Support families with housing instability (AIHW, 2022)." }
    ],
    resources: {
      websites: [
        { name: "Raising Children Network", url: "https://raisingchildren.net.au", desc: "Guidance on child development in families experiencing financial stress." },
        { name: "The Smith Family", url: "https://www.thesmithfamily.com.au", desc: "Supports children in low-income families with education access." },
        { name: "Brotherhood of St Laurence", url: "https://www.bsl.org.au", desc: "Research and support for child poverty and disadvantage." },
        { name: "Mission Australia", url: "https://www.missionaustralia.com.au", desc: "Provides family support, housing, and early intervention services." }
      ],
      books: [
        { title: "Last Stop on Market Street", author: "Matt de la Peña", impact: "Teaches gratitude and noticing inequality in society." },
        { title: "The Very Hungry Caterpillar", author: "Eric Carle", impact: "Can be used to explore 'needs vs wants'." },
        { title: "Something Beautiful", author: "Sharon Dennis Wyeth", impact: "Encourages hope and resilience in challenging environments." },
        { title: "Maddi's Fridge", author: "Lois Brandt", impact: "Child-friendly story about food insecurity and friendship." }
      ],
      videos: [
        { title: "Bluey (Neighbours / The Pool)", impact: "Shows fairness and sharing." },
        { title: "Play School", impact: "Teaches sharing, routines, and emotional security." },
        { title: "Sesame Street (Poverty Segments)", impact: "Builds understanding of kindness and empathy." },
        { title: "Daniel Tiger’s Neighbourhood", impact: "Teaches coping skills when things don’t go your way." }
      ],
      impactSummary: "Helps children understand differences in living conditions, builds gratitude, encourages sharing/fairness, and supports resilience through problem-solving."
    }
  },
  {
    id: "social",
    title: "Social Contexts",
    icon: "Users",
    understanding: {
      description: "Social contexts include social/geographic isolation, divorce, family breakdown, and out-of-home care. These determine daily experiences and access to support systems. Family disconnects and mobility in Australia contribute to these complicated settings (Camberis & McMahon, 2017).",
      relevance: "Relationships significantly impact learning and development. Parental separation or isolation influences a child's sense of belonging and identity. Teachers must offer responsive and inclusive environments.",
      theories: [
        { name: "Ecological Systems Theory (Bronfenbrenner)", detail: "Family dysfunction or lack of social interaction undermines the microsystem, impacting social development (Moore et al., 2015)." },
        { name: "Attachment Theory", detail: "Steady, trustful relations are vital. Disruptions in out-of-home care or divorce affect security of attachment and emotional wellbeing (National Scientific Council on the Developing Child, 2020)." }
      ],
      diversity: "Australian communities face overlapping problems, such as lack of services in remote areas or complex family setups post-separation. Out-of-home care children experience broken relationships and instability (Grace & Baird, 2022)."
    },
    impact: {
      development: "Isolation or family breakdown causes anxiety and problems forming relationships. Lack of social interaction affects language development and social skills. Long-term impacts on mental health are common (Scott, 2015).",
      learning: "Instability leads to low concentration, withdrawal, or behavioural difficulties. Limited access to social networks diminishes learning opportunities.",
      family: "Families undergo high stress and lack of support. Post-separation parental conflict adversely impacts children's emotional wellbeing (Moloney et al., 2015).",
      services: "Early childhood services provide crucial stability. Teachers should promote belonging and social bonding. Holistic care often requires collaboration with outside professionals."
    },
    policy: {
      frameworks: [
        "Early Years Learning Framework (EYLF) - fosters belonging, being, and becoming.",
        "National Quality Framework (NQF) - guarantees quality education and care.",
        "Child Protection and Out-of-Home Care policies - protect vulnerable children.",
        "Family Law Act (Australia) - concerns parental separation."
      ],
      statistics: "Research highlights a growing number of children enduring parental separation and family instability in Australia (Scott, 2015).",
      evaluation: "While policies prioritize wellbeing and safety, loopholes remain in meeting multifaceted social needs. Teachers must introduce practices that promote resilience (Woodrow et al., 2022)."
    },
    strategies: [
      { title: "Enhancing safe and positive relationships", detail: "Establishing trustful relationships to enhance emotional safety." },
      { title: "Developing welcoming and accommodating spaces", detail: "Ensuring every child is treasured regardless of family situation." },
      { title: "Fostering social skills", detail: "Taking dedicated time for interaction, play, and communication." },
      { title: "Collaboration with families", detail: "Ensuring open communication during transitions like separation." },
      { title: "Implementing trauma-informed practices", detail: "Acting on the impact of stress and instability on children (Woodrow et al., 2022)." }
    ],
    partnerships: [
      { name: "Social workers", role: "Support child wellbeing and families." },
      { name: "Child protection services", role: "Secure safety of children." },
      { name: "Family counsellors", role: "Help in separation or conflict situations." },
      { name: "Psychologists", role: "Support mental health and development." },
      { name: "Community organisations", role: "Give social and practical assistance." }
    ],
    resources: {
      websites: [
        { name: "AIFS", url: "https://aifs.gov.au", desc: "Research on divorce, separation, and child wellbeing." },
        { name: "Barnardos Australia", url: "https://www.barnardos.org.au", desc: "Foster care and vulnerable children support." },
        { name: "Relationships Australia", url: "https://relationships.org.au", desc: "Family separation counselling and support." },
        { name: "Kids Helpline", url: "https://kidshelpline.com.au", desc: "Support for loneliness and family stress." }
      ],
      books: [
        { title: "Two Homes", author: "Claire Masurel", impact: "Helps children understand separation and two households." },
        { title: "The Invisible String", author: "Patrice Karst", impact: "Maintains emotional connection during separation." },
        { title: "When Mum and Dad Live Apart", author: "Kathy Stinson", impact: "Provides divorce understanding for children." },
        { title: "A Family Is a Family Is a Family", author: "Sara O’Leary", impact: "Celebrates diverse family structures." }
      ],
      videos: [
        { title: "Little J & Big Cuz", impact: "Focuses on family, identity, and belonging." },
        { title: "Play School (Families episodes)", impact: "Explores diverse families, emotions, and change." },
        { title: "My Family, Your Family (Starting Blocks)", impact: "Supports understanding of family diversity and separation." },
        { title: "Barnardos Foster Care resources", impact: "Builds out-of-home care awareness and empathy." }
      ],
      impactSummary: "Builds understanding of diverse family structures, supports children through separation, and promotes emotional security and belonging."
    }
  },
  {
    id: "cultural",
    title: "Cultural & Diversity Contexts",
    icon: "Globe",
    understanding: {
      description: "Cultural contexts encompass the diverse backgrounds, languages, and traditions of children and families. This includes Aboriginal and Torres Strait Islander people and CALD families (immigrants/refugees). Growing multiculturalism in Australia necessitates versatile educator responses (Grace & Baird, 2022). Transition experiences like displacement impact identity (Sanagavarapu, 2022).",
      relevance: "Children's learning is deeply linked to identity, language, and culture. Affirmed cultural identity leads to feeling safe and secure (EYLF, 2022). Culturally responsive and anti-bias approaches promote equity and social justice (Derman-Sparks & Edwards, 2020).",
      theories: [
        { name: "Ecological Systems Theory (Bronfenbrenner)", detail: "The macrosystem shapes cultural values and expectations, which flow through to family practices (Moore et al., 2015)." },
        { name: "Sociocultural Theory (Vygotsky)", detail: "Learning is mediated by cultural tools and language. Culturally responsive pedagogies are vital (Fleer, 2010)." }
      ],
      diversity: "Australia is highly diverse; nearly half of the population has at least one parent born overseas (ABS, 2021). Challenges include language barriers and trauma for refugees, and systemic inequities for First Nations families (Sanagavarapu, 2022)."
    },
    impact: {
      development: "Acceptance of cultural background builds a sense of belonging. Conversely, exclusion or discrimination harms self-esteem. Refugee children's trauma impacts emotional regulation and relationships (Sanagavarapu, 2022).",
      learning: "English as an Additional Language (EAL) can initially impact communication confidence. However, bilingualism and home language support enhance overall learning and achievement (Cummins, 2000).",
      family: "Diverse families face difficulties navigating new systems while preserving identity. Discrimination can lead to marginalization and reluctance to engage with services.",
      services: "Services must embrace multiculturalism and multilingualism in the curriculum. Inclusive practice is a continuous process for educators (Woodrow et al., 2022)."
    },
    policy: {
      frameworks: [
        "Early Years Learning Framework (EYLF) - emphasizes inclusion and belonging.",
        "National Quality Framework (NQF) - requires culturally responsive practices.",
        "Closing the Gap Initiative - focuses on First Nations equity.",
        "Multicultural Policy for Australia - enables participation and inclusion."
      ],
      statistics: "ABS (2021) data confirms increasing cultural diversity, while refugee programs highlight the growing need for settlement support (Refugee Council of Australia, 2023).",
      evaluation: "Policies promote inclusion, but educators must go beyond 'pretend' inclusion to confront bias (Derman-Sparks & Edwards, 2020). Professional development is essential to realize policy intentions (Woodrow et al., 2022)."
    },
    strategies: [
      { title: "Use culturally responsive teaching", detail: "Creating a curriculum that draws directly on children's cultures." },
      { title: "Support home languages", detail: "Encouraging bilingualism and valuing the child's home language (Cummins, 2000)." },
      { title: "Build strong partnerships with families", detail: "Collaborating and acknowledging family expertise." },
      { title: "Create inclusive environments", detail: "Using a wide range of diverse materials and representations." },
      { title: "Engage in reflective practice", detail: "Reflecting on personal biases to develop cultural competence (Derman-Sparks & Edwards, 2020)." }
    ],
    partnerships: [
      { name: "SNAICC", role: "Support First Nations children and cultural safety." },
      { name: "Refugee and migrant organisations", role: "Provide settlement and transition support." },
      { name: "Cultural liaison officers", role: "Bridge the gap between families and services." },
      { name: "Interpreting services", role: "Facilitate clear communication with EAL families." },
      { name: "Settlement services", role: "Assist with the logistics of resettlement." }
    ],
    resources: {
      websites: [
        { name: "SNAICC", url: "https://www.snaicc.org.au", desc: "Focuses on First Nations children and cultural safety." },
        { name: "Early Childhood Australia", url: "https://www.earlychildhoodaustralia.org.au", desc: "Resources for inclusive ECEC practices." },
        { name: "Refugee Council of Australia", url: "https://www.refugeecouncil.org.au", desc: "Refugee support and awareness." },
        { name: "NSW Multicultural Education", url: "https://education.nsw.gov.au", desc: "Promotes cultural inclusion in education." }
      ],
      books: [
        { title: "The Colour of Us", author: "Karen Katz", impact: "Celebrates cultural identity and diverse skin tones." },
        { title: "My Two Blankets", author: "Irena Kobald", impact: "Explores the refugee experience and finding belonging." },
        { title: "All Are Welcome", author: "Alexandra Penfold", impact: "Promotes a school culture of inclusion." },
        { title: "Come Over to My House", author: "Dr Seuss", impact: "Showcases cultural differences in lifestyles." }
      ],
      videos: [
        { title: "Little J & Big Cuz", impact: "Shows First Nations culture and identity." },
        { title: "Behind the News (BTN Kids)", impact: "Explains migration and refugee stories." },
        { title: "ABC Education - Migration Stories", impact: "Short documentaries on diversity." },
        { title: "UNICEF Australia Videos", impact: "Covers refugee children's rights and global diversity." }
      ],
      impactSummary: "Promotes respect for cultural diversity, supports migrant identities, and builds understanding of refugee experiences."
    }
  },
  {
    id: "health",
    title: "Health & Wellbeing Contexts",
    icon: "Heart",
    understanding: {
      description: "Health and wellbeing contexts involve parent's mental illness, substance use, trauma, grief, and neglect. These significantly impact child development. In Australia, health inequities and social disadvantage often co-exist (Grace & Baird, 2022).",
      relevance: "Wellbeing is fundamental to development and a core EYLF learning outcome. Teachers are key to early detection and support of children in complex family situations (EYLF, 2022).",
      theories: [
        { name: "Ecological Systems Theory (Bronfenbrenner)", detail: "Microsystem issues like parental mental health impact a child's emotional safety (Moore et al., 2015)." },
        { name: "Attachment Theory", detail: "Secure attachment promotes emotional regulation; insecure attachment from trauma/neglect leads to poor outcomes (National Scientific Council on the Developing Child, 2020)." },
        { name: "Toxic Stress Theory", detail: "Early adversity causes toxic stress, negatively impacting brain development (Shonkoff et al., 2012)." }
      ],
      diversity: "Complex family situations often involve multiple risk factors. Educators must be aware of the coexistence of health inequities and social disadvantage."
    },
    impact: {
      development: "Problems with emotional regulation and social interactions. Adverse experiences affect learning and memory processes in the brain (Shonkoff et al., 2012).",
      learning: "Decreased attention and isolation. Familial substance use impacts family routines and learning support (Incerti et al., 2015).",
      family: "Families face stress, stigma, and lack of support. Parental mental health or drug dependency impairs caregiving ability (AIHW, 2021).",
      services: "Services must take a trauma-informed approach. Teachers need to recognize signs of distress and collaborate with health professionals."
    },
    policy: {
      frameworks: [
        "Early Years Learning Framework (EYLF) - promotes secure relationships.",
        "National Quality Framework (NQF) - prioritizes health and safety.",
        "National Mental Health Strategy - promotes mental health services.",
        "Child Protection Frameworks - deal with abuse and neglect."
      ],
      statistics: "AIHW (2021) reports growing use of mental health and child protection services, reflecting widespread family distress.",
      evaluation: "Policies focus on early intervention, but service access gaps remain. Be You (2020) emphasizes developing educator skills for mental health support (Woodrow et al., 2022)."
    },
    strategies: [
      { title: "Implement trauma-informed practice", detail: "Understanding trauma effects and responding sensitively (Shonkoff et al., 2012)." },
      { title: "Build secure relationships", detail: "Offering supportive interactions to strengthen emotional security." },
      { title: "Support social-emotional learning", detail: "Promoting emotional regulation and coping skills." },
      { title: "Work together with families", detail: "Collaborating to support specific family needs." },
      { title: "Refer to appropriate services", detail: "Providing access to mental health and wellbeing services." }
    ],
    partnerships: [
      { name: "Psychologists and counsellors", role: "Provide professional mental health support." },
      { name: "Social workers", role: "Support family stability and advocacy." },
      { name: "Child protection services", role: "Ensure immediate safety of the child." },
      { name: "Psychological services (e.g., Beyond Blue)", role: "Offer mental health awareness and family wellbeing." },
      { name: "Health services (GPs)", role: "Address physical health needs and referrals." }
    ],
    resources: {
      websites: [
        { name: "Emerging Minds", url: "https://emergingminds.com.au", desc: "Child mental health and trauma support." },
        { name: "Beyond Blue", url: "https://www.beyondblue.org.au", desc: "Mental health awareness and family wellbeing." },
        { name: "Kids Helpline", url: "https://kidshelpline.com.au", desc: "Counselling for children." },
        { name: "Australian Childhood Foundation", url: "https://www.childhood.org.au", desc: "Trauma and recovery support." }
      ],
      books: [
        { title: "The Colour Monster", author: "Anna Llenas", impact: "Helps children name and understand emotions." },
        { title: "The Huge Bag of Worries", author: "Virginia Ironside", impact: "Addresses childhood anxiety and worries." },
        { title: "When I’m Feeling Sad", author: "Trace Moroney", impact: "Explores grief and sadness." },
        { title: "The Invisible String", author: "Patrice Karst", impact: "Helps children cope with loss and separation." }
      ],
      videos: [
        { title: "Play School: Mindfully Me", impact: "Teaches mindfulness and emotional regulation." },
        { title: "Sesame Street Emotional Wellbeing", impact: "Builds emotional literacy and coping strategies." },
        { title: "Moodies (ABC Kids)", impact: "Helps children understand big emotions." },
        { title: "Kangaroo Beach", impact: "Teaches teamwork and resilience in stressful situations." }
      ],
      impactSummary: "Builds understanding of emotions, supports coping strategies, and promotes mindfulness and security."
    }
  },
  {
    id: "crisis",
    title: "Crisis & Emergency Contexts",
    icon: "ShieldAlert",
    understanding: {
      description: "Crisis contexts involve natural disasters (bushfires, floods), family violence, displacement, and community emergencies. These prevent normal, safe functioning. Recent disasters in Australia highlight the intensity and impact on community stress (AIHW, 2023).",
      relevance: "Children are especially susceptible to disruptions. Teachers are vital in assisting children to reflect on experiences and regain a sense of safety (EYLF, 2022).",
      theories: [
        { name: "Ecological Systems Theory (Bronfenbrenner)", detail: "Macrosystem crises flow through to the microsystem, affecting close family and learning settings (Moore et al., 2015)." },
        { name: "Trauma Theories", detail: "Ongoing stress without support causes toxic stress, impacting brain development and emotion regulation (National Scientific Council on the Developing Child, 2020)." }
      ],
      diversity: "Disaster and family violence exposure is widespread. Supportive relationships act as protective factors during these times (Scott, 2015)."
    },
    impact: {
      development: "Anxiety, fear, and withdrawal. Traumatic experiences impact learning and brain development during early childhood (National Scientific Council on the Developing Child, 2020).",
      learning: "Struggle to focus and engage. School disruption and displacement disrupt the continuity of learning.",
      family: "Families experience financial pressure and emotional stress. Disasters lead to major disruptions in family routines (Camberis & McMahon, 2017).",
      services: "Services must offer safety and consistency. Teachers may need to adapt practices and work with outside agencies for increased support."
    },
    policy: {
      frameworks: [
        "Early Years Learning Framework (EYLF) - promotes wellbeing and resilience.",
        "National Quality Framework (NQF) - ensures safe environments.",
        "National Disaster Risk Reduction Framework - supports disaster risk reduction.",
        "Child Protection Frameworks - protect from family violence."
      ],
      statistics: "AIHW (2023) reports a rise in the need for family services after disasters and emergencies in Australia.",
      evaluation: "Policies advocate for safety, but gaps remain for marginalised families. Continuous professional learning is needed for educators (Woodrow et al., 2022)."
    },
    strategies: [
      { title: "Implement trauma-informed practice", detail: "Understanding crisis effects and being sensitive to child reactions." },
      { title: "Create predictable environments", detail: "Using consistency to encourage feelings of safety." },
      { title: "Support emotional expression", detail: "Encouraging expression through play, art, and verbal communication." },
      { title: "Build strong relationships with families", detail: "Keeping open lines of communication during crises." },
      { title: "Develop emergency preparedness plans", detail: "Planning for effective responses to future emergencies (National Scientific Council on the Developing Child, 2020)." }
    ],
    partnerships: [
      { name: "Emergency services (Police/Fire)", role: "Ensure immediate physical safety." },
      { name: "Child protection services", role: "Protect children from family violence." },
      { name: "Social workers and counsellors", role: "Provide trauma and crisis support." },
      { name: "Community support organisations", role: "Offer practical aid and local resources." },
      { name: "Red Cross", role: "Deliver disaster response and assistance." }
    ],
    resources: {
      websites: [
        { name: "Red Cross Australia", url: "https://www.redcross.org.au", desc: "Disaster support and preparedness." },
        { name: "Disaster Assist", url: "https://www.disasterassist.gov.au", desc: "Flood, fire, and cyclone recovery support." },
        { name: "Safe Steps", url: "https://www.safesteps.org.au", desc: "Family violence support and referrals." },
        { name: "Kids Helpline", url: "https://kidshelpline.com.au", desc: "Crisis counselling for children." }
      ],
      books: [
        { title: "I’m Not Scared, I’m Prepared!", author: "Julia Cook", impact: "Disaster preparedness for children." },
        { title: "Come Back, Ben", author: "Rosemary Wells", impact: "Addresses loss, separation, and security." },
        { title: "The Day the Ocean Came to Visit", author: "Margaret Wild", impact: "Natural disasters and managing fear." },
        { title: "After the Storm", author: "Nick Butterworth", impact: "Recovery, safety, and emotional reassurance." }
      ],
      videos: [
        { title: "Sesame Street - Hurricane Clips", impact: "Helps children understand fear and recovery." },
        { title: "ABC Kids News (BTN Kids)", impact: "Child-friendly explanations of emergencies." },
        { title: "Red Cross 'Emergency Ready'", impact: "Teaches emotional coping during disasters." },
        { title: "Play Safe Be Safe", impact: "Fire safety education for children." }
      ],
      impactSummary: "Supports children through fear and displacement, teaches safety skills, and promotes recovery resilience."
    }
  }
];
