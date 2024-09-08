UPDATE
    P
SET
    FULL_ADDRESS = S.S_ADDRESS
FROM
    (
        SELECT
            P.PROVIDER_ID
        FROM
            EPS_SIT.PROVIDER_LOCATION P
            INNER JOIN (
                select
                    CONCAT('T-', S.PROVIDER_ID) AS PROVIDER_ID,
                    CASE
                        WHEN LEN(S.FULL_ADDRESS) > 0 THEN S.FULL_ADDRESS
                        ELSE NULL
                    END AS S_ADDRESS
                FROM
                    (
                        SELECT
                            PROVIDER_ID,
                            CONCAT_WS(
                                ',',
                                CASE
                                    WHEN LEN (TRIM(PRVDR_ADDR LINE1)) > 0 THEN TRIM(PRVDR_ADDR_LINE1)
                                END,
                                CASE
                                    WHEN LEN (TRIM(PRVDR_ADDR_LINE2)) > 0 THEN TRIM(PRVDR_ADDR_LINE2)
                                END,
                                CASE
                                    WHEN LEN (TRIM(PRVDR_MUNICIPALITY)) > 0 THEN TRIM(PRVDR_MUNICIPALITY)
                                END,
                                CASE
                                    WHEN LEN(TRIM(PRVDR_PROVINCE_NAME)) > 0 THEN TRIM(PRVDR_PROVINCE_NAME)
                                END,
                                CASE
                                    WHEN LEN (TRIM(PRVDR_POSTAL_CD)) > 0 THEN TRIM(PRVDR_POSTAL_CD)
                                END,
                                CASE
                                    WHEN LEN (TRIM(PRVDR_COUNTRY_CD)) > 0 THEN TRIM(PRVDR_COUNTRY_CD)
                                END
                            ) AS FULL ADDRESS
                        from
                            EPS_ETL_ODM_SIT.EB0109_PROVIDER
                    ) S
            )
    ) ON P.PROVIDER_ID = CONCAT('T-', S.PROVIDER_ID)
    AND DATA_SOURCE = 'MA'